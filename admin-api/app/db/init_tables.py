"""
One-time script: create DynamoDB tables and seed the admin user.
Run with: python -m app.db.init_tables
"""
import bcrypt
import boto3
import json
import sys
from app.config import settings


def get_client():
    kwargs = {"region_name": settings.aws_region}
    if settings.aws_access_key_id:
        kwargs["aws_access_key_id"] = settings.aws_access_key_id
        kwargs["aws_secret_access_key"] = settings.aws_secret_access_key
    return boto3.client("dynamodb", **kwargs)


PREFIX = settings.dynamodb_table_prefix


def create_table_if_not_exists(client, table_name, key_schema, attribute_definitions, gsis=None):
    try:
        kwargs = {
            "TableName": table_name,
            "KeySchema": key_schema,
            "AttributeDefinitions": attribute_definitions,
            "BillingMode": "PAY_PER_REQUEST",
        }
        if gsis:
            kwargs["GlobalSecondaryIndexes"] = gsis
        client.create_table(**kwargs)
        print(f"  Created: {table_name}")
    except client.exceptions.ResourceInUseException:
        print(f"  Already exists: {table_name}")


def main():
    client = get_client()

    print("Creating DynamoDB tables...")

    # luminova_resources
    create_table_if_not_exists(
        client,
        f"{PREFIX}resources",
        key_schema=[{"AttributeName": "resource_id", "KeyType": "HASH"}],
        attribute_definitions=[
            {"AttributeName": "resource_id", "AttributeType": "S"},
            {"AttributeName": "status", "AttributeType": "S"},
            {"AttributeName": "date_added", "AttributeType": "S"},
        ],
        gsis=[{
            "IndexName": "status-date_added-index",
            "KeySchema": [
                {"AttributeName": "status", "KeyType": "HASH"},
                {"AttributeName": "date_added", "KeyType": "RANGE"},
            ],
            "Projection": {"ProjectionType": "ALL"},
        }],
    )

    # luminova_jobs
    create_table_if_not_exists(
        client,
        f"{PREFIX}jobs",
        key_schema=[{"AttributeName": "job_id", "KeyType": "HASH"}],
        attribute_definitions=[
            {"AttributeName": "job_id", "AttributeType": "S"},
            {"AttributeName": "client_name", "AttributeType": "S"},
        ],
        gsis=[{
            "IndexName": "client_name-index",
            "KeySchema": [{"AttributeName": "client_name", "KeyType": "HASH"}],
            "Projection": {"ProjectionType": "ALL"},
        }],
    )

    # luminova_employees
    create_table_if_not_exists(
        client,
        f"{PREFIX}employees",
        key_schema=[{"AttributeName": "employee_id", "KeyType": "HASH"}],
        attribute_definitions=[
            {"AttributeName": "employee_id", "AttributeType": "S"},
        ],
    )

    # luminova_admin_users
    create_table_if_not_exists(
        client,
        f"{PREFIX}admin_users",
        key_schema=[{"AttributeName": "user_id", "KeyType": "HASH"}],
        attribute_definitions=[
            {"AttributeName": "user_id", "AttributeType": "S"},
        ],
    )

    print("\nSeeding admin user...")
    if not settings.admin_user_id or not settings.admin_password:
        print("  SKIPPED: ADMIN_USER_ID and ADMIN_PASSWORD not set in .env")
        return

    import boto3 as b3
    resource_kwargs = {"region_name": settings.aws_region}
    if settings.aws_access_key_id:
        resource_kwargs["aws_access_key_id"] = settings.aws_access_key_id
        resource_kwargs["aws_secret_access_key"] = settings.aws_secret_access_key
    db = b3.resource("dynamodb", **resource_kwargs)
    table = db.Table(f"{PREFIX}admin_users")

    password_hash = bcrypt.hashpw(
        settings.admin_password.encode(), bcrypt.gensalt()
    ).decode()

    table.put_item(Item={
        "user_id": settings.admin_user_id,
        "password_hash": password_hash,
        "display_name": "Admin",
    })
    print(f"  Admin user '{settings.admin_user_id}' seeded.")


if __name__ == "__main__":
    main()
