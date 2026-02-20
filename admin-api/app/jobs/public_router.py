from fastapi import APIRouter, Query
from app.jobs.schemas import PaginatedJobs
from app.jobs import service

public_router = APIRouter(prefix="/public/jobs", tags=["public"])


@public_router.get("", response_model=PaginatedJobs)
async def list_jobs_public(
    limit: int = Query(50, ge=1, le=200),
    last_key: str | None = Query(None),
):
    items, next_key = service.list_jobs(limit=limit, last_key=last_key)
    return PaginatedJobs(items=items, last_key=next_key)
