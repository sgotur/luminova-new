import base64
import json
from typing import Optional
from app.db.dynamodb import employees_table
from app.employees.schemas import EmployeeOut


def _serialize(item: dict) -> EmployeeOut:
    return EmployeeOut(**{
        "employee_id": item.get("employee_id", ""),
        "first_name": item.get("first_name", ""),
        "last_name": item.get("last_name", ""),
        "basic_info": item.get("basic_info", ""),
        "assigned_client": item.get("assigned_client", ""),
        "join_date": item.get("join_date", ""),
        "actual_billing_rate": item.get("actual_billing_rate", ""),
    })


def list_employees(
    search: Optional[str] = None,
    limit: int = 50,
    last_key: Optional[str] = None,
) -> tuple[list[EmployeeOut], Optional[str]]:
    table = employees_table()
    kwargs: dict = {"Limit": limit}

    if last_key:
        kwargs["ExclusiveStartKey"] = json.loads(base64.b64decode(last_key).decode())

    result = table.scan(**kwargs)
    items = [_serialize(i) for i in result.get("Items", [])]

    if search:
        s = search.lower()
        items = [
            i for i in items
            if s in i.first_name.lower()
            or s in i.last_name.lower()
            or s in i.assigned_client.lower()
        ]

    next_key = None
    if "LastEvaluatedKey" in result:
        next_key = base64.b64encode(
            json.dumps(result["LastEvaluatedKey"]).encode()
        ).decode()

    return items, next_key


def get_employee(employee_id: str) -> Optional[EmployeeOut]:
    table = employees_table()
    result = table.get_item(Key={"employee_id": employee_id})
    item = result.get("Item")
    if not item:
        return None
    return _serialize(item)
