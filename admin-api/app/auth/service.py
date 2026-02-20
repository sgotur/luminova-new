from datetime import datetime, timedelta, timezone
from jose import jwt
import bcrypt
from app.config import settings
from app.db.dynamodb import admin_users_table


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode(), hashed.encode())


def get_admin_user(user_id: str) -> dict | None:
    table = admin_users_table()
    result = table.get_item(Key={"user_id": user_id})
    return result.get("Item")


def authenticate(user_id: str, password: str) -> dict | None:
    user = get_admin_user(user_id)
    if not user:
        return None
    if not verify_password(password, user["password_hash"]):
        return None
    return user


def create_access_token(user_id: str) -> str:
    expire = datetime.now(timezone.utc) + timedelta(hours=settings.jwt_expire_hours)
    payload = {
        "sub": user_id,
        "exp": expire,
        "iat": datetime.now(timezone.utc),
    }
    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def decode_token(token: str) -> dict:
    return jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
