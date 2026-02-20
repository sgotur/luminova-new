import boto3
from app.config import settings


def _client():
    return boto3.client(
        "s3",
        region_name=settings.aws_region,
        aws_access_key_id=settings.aws_access_key_id or None,
        aws_secret_access_key=settings.aws_secret_access_key or None,
    )


def upload_resume(file_bytes: bytes, filename: str, resource_id: str, mime_type: str = "application/octet-stream") -> str:
    """Upload a resume to S3 and return the S3 object key."""
    s3 = _client()
    key = f"resumes/{resource_id}/{filename}"
    s3.put_object(
        Bucket=settings.s3_resume_bucket,
        Key=key,
        Body=file_bytes,
        ContentType=mime_type,
    )
    return key


def get_presigned_url(s3_key: str, expires: int = 604800) -> str:
    """Generate a presigned download URL for an S3 object (default 7-day expiry)."""
    s3 = _client()
    return s3.generate_presigned_url(
        "get_object",
        Params={"Bucket": settings.s3_resume_bucket, "Key": s3_key},
        ExpiresIn=expires,
    )
