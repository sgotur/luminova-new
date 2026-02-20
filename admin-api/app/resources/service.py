import uuid
import base64
import json
from datetime import datetime, timezone
from typing import Optional
from boto3.dynamodb.conditions import Key, Attr
from app.db.dynamodb import resources_table
from app.resources.schemas import ResourceCreate, ResourceUpdate, ResourceOut
from app.resources import s3 as s3_storage
from app.config import settings


def _serialize(item: dict) -> ResourceOut:
    s3_key = item.get("resume_s3_key", "")
    resume_url = item.get("resume_url", "")
    if s3_key and settings.s3_resume_bucket:
        resume_url = s3_storage.get_presigned_url(s3_key)
    return ResourceOut(**{
        "resource_id": item.get("resource_id", ""),
        "first_name": item.get("first_name", ""),
        "last_name": item.get("last_name", ""),
        "contact": item.get("contact", ""),
        "referred_by": item.get("referred_by", ""),
        "status": item.get("status", ""),
        "date_added": item.get("date_added", ""),
        "assigned_client": item.get("assigned_client", ""),
        "key_skills": list(item.get("key_skills", [])),
        "expected_salary": item.get("expected_salary", ""),
        "shared_with": item.get("shared_with", ""),
        "resume_url": resume_url,
        "resume_filename": item.get("resume_filename", ""),
        "resume_s3_key": s3_key,
        "onboarded": bool(item.get("onboarded", False)),
        "onboarded_date": item.get("onboarded_date", ""),
    })


def list_resources(
    status: Optional[str] = None,
    search: Optional[str] = None,
    onboarded: Optional[bool] = None,
    limit: int = 50,
    last_key: Optional[str] = None,
) -> tuple[list[ResourceOut], Optional[str]]:
    table = resources_table()
    kwargs: dict = {"Limit": limit}

    if last_key:
        kwargs["ExclusiveStartKey"] = json.loads(base64.b64decode(last_key).decode())

    if onboarded is not None:
        kwargs["FilterExpression"] = Attr("onboarded").eq(onboarded)

    if status:
        result = table.query(
            IndexName="status-date_added-index",
            KeyConditionExpression=Key("status").eq(status),
            ScanIndexForward=False,
            **kwargs,
        )
    else:
        result = table.scan(**kwargs)

    items = [_serialize(i) for i in result.get("Items", [])]

    if search:
        s = search.lower()
        items = [
            i for i in items
            if s in i.first_name.lower()
            or s in i.last_name.lower()
            or s in i.contact.lower()
            or any(s in skill.lower() for skill in i.key_skills)
        ]

    next_key = None
    if "LastEvaluatedKey" in result:
        next_key = base64.b64encode(
            json.dumps(result["LastEvaluatedKey"]).encode()
        ).decode()

    return items, next_key


def get_resource(resource_id: str) -> Optional[ResourceOut]:
    table = resources_table()
    result = table.get_item(Key={"resource_id": resource_id})
    item = result.get("Item")
    if not item:
        return None
    return _serialize(item)


def create_resource(data: ResourceCreate) -> ResourceOut:
    table = resources_table()
    resource_id = str(uuid.uuid4())
    date_added = datetime.now(timezone.utc).isoformat()
    item = {
        "resource_id": resource_id,
        "date_added": date_added,
        **data.model_dump(),
    }
    table.put_item(Item=item)
    return _serialize(item)


def update_resource(resource_id: str, data: ResourceUpdate) -> Optional[ResourceOut]:
    table = resources_table()
    updates = {k: v for k, v in data.model_dump().items() if v is not None}
    if not updates:
        return get_resource(resource_id)

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
        Key={"resource_id": resource_id},
        UpdateExpression="SET " + ", ".join(expr_parts),
        ExpressionAttributeNames=expr_names,
        ExpressionAttributeValues=expr_values,
    )
    return get_resource(resource_id)


def delete_resource(resource_id: str) -> None:
    table = resources_table()
    table.delete_item(Key={"resource_id": resource_id})


def update_resume(resource_id: str, s3_key: str, resume_filename: str) -> Optional[ResourceOut]:
    return update_resource(resource_id, ResourceUpdate(
        resume_s3_key=s3_key,
        resume_filename=resume_filename,
        resume_url="",  # clear any old Drive URL
    ))
