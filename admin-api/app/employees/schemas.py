from typing import Optional, List
from pydantic import BaseModel


class EmployeeOut(BaseModel):
    employee_id: str
    first_name: str
    last_name: str
    basic_info: str = ""
    assigned_client: str = ""
    join_date: str = ""
    actual_billing_rate: str = ""


class PaginatedEmployees(BaseModel):
    items: List[EmployeeOut]
    last_key: Optional[str] = None
