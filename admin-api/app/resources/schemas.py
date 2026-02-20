from typing import Optional, List
from pydantic import BaseModel


VALID_STATUSES = {"H1B", "OPT", "I-140 Approved", "Citizen", "GC"}


class ResourceCreate(BaseModel):
    first_name: str
    last_name: str
    contact: str
    referred_by: str = ""
    status: str
    assigned_client: str = ""
    key_skills: List[str] = []
    expected_salary: str = ""
    shared_with: str = ""


class ResourceUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    contact: Optional[str] = None
    referred_by: Optional[str] = None
    status: Optional[str] = None
    assigned_client: Optional[str] = None
    key_skills: Optional[List[str]] = None
    expected_salary: Optional[str] = None
    shared_with: Optional[str] = None
    resume_url: Optional[str] = None
    resume_filename: Optional[str] = None
    resume_s3_key: Optional[str] = None
    onboarded: Optional[bool] = None
    onboarded_date: Optional[str] = None


class ResourceOut(BaseModel):
    resource_id: str
    first_name: str
    last_name: str
    contact: str
    referred_by: str = ""
    status: str
    date_added: str
    assigned_client: str = ""
    key_skills: List[str] = []
    expected_salary: str = ""
    shared_with: str = ""
    resume_url: str = ""
    resume_filename: str = ""
    resume_s3_key: str = ""
    onboarded: bool = False
    onboarded_date: str = ""


class PaginatedResources(BaseModel):
    items: List[ResourceOut]
    last_key: Optional[str] = None
