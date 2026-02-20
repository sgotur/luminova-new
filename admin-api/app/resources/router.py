from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, Query
from app.dependencies import get_current_user
from app.resources.schemas import ResourceCreate, ResourceUpdate, ResourceOut, PaginatedResources
from app.resources import service
from app.resources.s3 import upload_resume as s3_upload

router = APIRouter(prefix="/resources", tags=["resources"])


@router.get("", response_model=PaginatedResources)
async def list_resources(
    status: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
    onboarded: Optional[bool] = Query(None),
    limit: int = Query(50, ge=1, le=200),
    last_key: Optional[str] = Query(None),
    _user=Depends(get_current_user),
):
    items, next_key = service.list_resources(status=status, search=search, onboarded=onboarded, limit=limit, last_key=last_key)
    return PaginatedResources(items=items, last_key=next_key)


@router.post("", response_model=ResourceOut, status_code=201)
async def create_resource(body: ResourceCreate, _user=Depends(get_current_user)):
    return service.create_resource(body)


@router.get("/{resource_id}", response_model=ResourceOut)
async def get_resource(resource_id: str, _user=Depends(get_current_user)):
    item = service.get_resource(resource_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resource not found")
    return item


@router.put("/{resource_id}", response_model=ResourceOut)
async def update_resource(resource_id: str, body: ResourceUpdate, _user=Depends(get_current_user)):
    item = service.update_resource(resource_id, body)
    if not item:
        raise HTTPException(status_code=404, detail="Resource not found")
    return item


@router.delete("/{resource_id}", status_code=204)
async def delete_resource(resource_id: str, _user=Depends(get_current_user)):
    existing = service.get_resource(resource_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Resource not found")
    service.delete_resource(resource_id)


@router.post("/{resource_id}/resume", response_model=ResourceOut)
async def upload_resume(
    resource_id: str,
    file: UploadFile = File(...),
    _user=Depends(get_current_user),
):
    existing = service.get_resource(resource_id)
    if not existing:
        raise HTTPException(status_code=404, detail="Resource not found")

    content = await file.read()
    mime_type = file.content_type or "application/octet-stream"
    s3_key = s3_upload(content, file.filename or "resume", resource_id, mime_type)
    updated = service.update_resume(resource_id, s3_key, file.filename or "resume")
    return updated
