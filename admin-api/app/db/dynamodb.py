import boto3
from functools import lru_cache
from app.config import settings


@lru_cache(maxsize=1)
def get_dynamodb_resource():
    return boto3.resource("dynamodb", region_name=settings.aws_region)


def get_table(name: str):
    db = get_dynamodb_resource()
    return db.Table(f"{settings.dynamodb_table_prefix}{name}")


# Table name helpers
def resources_table():
    return get_table("resources")


def jobs_table():
    return get_table("jobs")


def employees_table():
    return get_table("employees")


def admin_users_table():
    return get_table("admin_users")
