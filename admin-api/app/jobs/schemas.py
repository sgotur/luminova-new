from typing import Optional, List
from pydantic import BaseModel


class JobCreate(BaseModel):
    job_title: str
    job_description: str = ""
    client_name: str
    referred_by: str = ""
    expected_start_date: str = ""
    vendor_pay_rate: str = ""
    vendor_name: str = ""
    location: str = ""
    duration: str = ""
    client_type: str = ""
    preferred_qualifications: str = ""
    additional_qualifications: str = ""
    billing_rate: str = ""


class JobUpdate(BaseModel):
    job_title: Optional[str] = None
    job_description: Optional[str] = None
    client_name: Optional[str] = None
    referred_by: Optional[str] = None
    expected_start_date: Optional[str] = None
    vendor_pay_rate: Optional[str] = None
    vendor_name: Optional[str] = None
    location: Optional[str] = None
    duration: Optional[str] = None
    client_type: Optional[str] = None
    preferred_qualifications: Optional[str] = None
    additional_qualifications: Optional[str] = None
    billing_rate: Optional[str] = None


class JobOut(BaseModel):
    job_id: str
    job_title: str
    job_description: str = ""
    client_name: str
    referred_by: str = ""
    expected_start_date: str = ""
    vendor_pay_rate: str = ""
    vendor_name: str = ""
    location: str = ""
    duration: str = ""
    client_type: str = ""
    preferred_qualifications: str = ""
    additional_qualifications: str = ""
    billing_rate: str = ""
    date_created: str


class PaginatedJobs(BaseModel):
    items: List[JobOut]
    last_key: Optional[str] = None
