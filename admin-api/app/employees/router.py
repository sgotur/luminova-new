from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from app.dependencies import get_current_user
from app.employees.schemas import EmployeeOut, PaginatedEmployees
from app.employees import service

router = APIRouter(prefix="/employees", tags=["employees"])


@router.get("", response_model=PaginatedEmployees)
async def list_employees(
    search: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=200),
    last_key: Optional[str] = Query(None),
    _user=Depends(get_current_user),
):
    items, next_key = service.list_employees(search=search, limit=limit, last_key=last_key)
    return PaginatedEmployees(items=items, last_key=next_key)


@router.get("/{employee_id}", response_model=EmployeeOut)
async def get_employee(employee_id: str, _user=Depends(get_current_user)):
    item = service.get_employee(employee_id)
    if not item:
        raise HTTPException(status_code=404, detail="Employee not found")
    return item
