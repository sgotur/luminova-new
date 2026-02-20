import uuid
import base64
import json
from datetime import datetime, timezone
from typing import Optional
from boto3.dynamodb.conditions import Key
from app.db.dynamodb import jobs_table
from app.jobs.schemas import JobCreate, JobUpdate, JobOut


def _serialize(item: dict) -> JobOut:
    return JobOut(**{
        "job_id": item.get("job_id", ""),
        "job_title": item.get("job_title", ""),
        "job_description": item.get("job_description", ""),
        "client_name": item.get("client_name", ""),
        "referred_by": item.get("referred_by", ""),
        "expected_start_date": item.get("expected_start_date", ""),
        "vendor_pay_rate": item.get("vendor_pay_rate", ""),
        "vendor_name": item.get("vendor_name", ""),
        "location": item.get("location", ""),
        "duration": item.get("duration", ""),
        "client_type": item.get("client_type", ""),
        "preferred_qualifications": item.get("preferred_qualifications", ""),
        "additional_qualifications": item.get("additional_qualifications", ""),
        "billing_rate": item.get("billing_rate", ""),
        "date_created": item.get("date_created", ""),
    })


def list_jobs(
    client_name: Optional[str] = None,
    search: Optional[str] = None,
    limit: int = 50,
    last_key: Optional[str] = None,
) -> tuple[list[JobOut], Optional[str]]:
    table = jobs_table()
    kwargs: dict = {"Limit": limit}

    if last_key:
        kwargs["ExclusiveStartKey"] = json.loads(base64.b64decode(last_key).decode())

    if client_name:
        result = table.query(
            IndexName="client_name-index",
            KeyConditionExpression=Key("client_name").eq(client_name),
            **kwargs,
        )
    else:
        result = table.scan(**kwargs)

    items = [_serialize(i) for i in result.get("Items", [])]

    if search:
        s = search.lower()
        items = [
            i for i in items
            if s in i.job_title.lower()
            or s in i.client_name.lower()
            or s in i.location.lower()
        ]

    next_key = None
    if "LastEvaluatedKey" in result:
        next_key = base64.b64encode(
            json.dumps(result["LastEvaluatedKey"]).encode()
        ).decode()

    return items, next_key


def get_job(job_id: str) -> Optional[JobOut]:
    table = jobs_table()
    result = table.get_item(Key={"job_id": job_id})
    item = result.get("Item")
    if not item:
        return None
    return _serialize(item)


def create_job(data: JobCreate) -> JobOut:
    table = jobs_table()
    job_id = str(uuid.uuid4())
    date_created = datetime.now(timezone.utc).isoformat()
    item = {
        "job_id": job_id,
        "date_created": date_created,
        **{k: v for k, v in data.model_dump().items() if v is not None and v != ""},
    }
    table.put_item(Item=item)
    return _serialize(item)


def update_job(job_id: str, data: JobUpdate) -> Optional[JobOut]:
    table = jobs_table()
    updates = {k: v for k, v in data.model_dump().items() if v is not None and v != ""}
    if not updates:
        return get_job(job_id)

    expr_parts = []
    expr_names = {}
    expr_values = {}
    for i, (key, val) in enumerate(updates.items()):
        placeholder = f"#f{i}"
        value_key = f":v{i}"
        expr_parts.append(f"{placeholder} = {value_key}")
        expr_names[placeholder] = key
        expr_values[value_key] = val

    table.update_item(
        Key={"job_id": job_id},
        UpdateExpression="SET " + ", ".join(expr_parts),
        ExpressionAttributeNames=expr_names,
        ExpressionAttributeValues=expr_values,
    )
    return get_job(job_id)


def delete_job(job_id: str) -> None:
    table = jobs_table()
    table.delete_item(Key={"job_id": job_id})
