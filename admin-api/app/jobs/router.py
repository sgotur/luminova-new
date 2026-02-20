from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from app.dependencies import get_current_user
from app.jobs.schemas import JobCreate, JobUpdate, JobOut, PaginatedJobs
from app.jobs import service

router = APIRouter(prefix="/jobs", tags=["jobs"])


@router.get("", response_model=PaginatedJobs)
async def list_jobs(
    client_name: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=200),
    last_key: Optional[str] = Query(None),
    _user=Depends(get_current_user),
):
    items, next_key = service.list_jobs(client_name=client_name, search=search, limit=limit, last_key=last_key)
    return PaginatedJobs(items=items, last_key=next_key)


@router.post("", response_model=JobOut, status_code=201)
async def create_job(body: JobCreate, _user=Depends(get_current_user)):
    return service.create_job(body)


@router.get("/{job_id}", response_model=JobOut)
async def get_job(job_id: str, _user=Depends(get_current_user)):
    item = service.get_job(job_id)
    if not item:
        raise HTTPException(status_code=404, detail="Job not found")
    return item


@router.put("/{job_id}", response_model=JobOut)
async def update_job(job_id: str, body: JobUpdate, _user=Depends(get_current_user)):
    item = service.update_job(job_id, body)
    if not item:
        raise HTTPException(status_code=404, detail="Job not found")
    return item


@router.delete("/{job_id}", status_code=204)
async def delete_job(job_id: str, _user=Depends(get_current_user)):
    existing = service.get_job(job_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Job not found")
    service.delete_job(job_id)
