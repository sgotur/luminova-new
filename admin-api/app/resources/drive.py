import json
import io
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseUpload
from app.config import settings

SCOPES = ["https://www.googleapis.com/auth/drive.file"]


def _get_drive_service():
    info = json.loads(settings.google_service_account_json)
    # Normalize private key newlines — .env storage can leave them as literal \n
    if "private_key" in info:
        info["private_key"] = info["private_key"].replace("\\n", "\n")
    creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    return build("drive", "v3", credentials=creds)


def _folder_id() -> str:
    """Accept either a bare folder ID or a full Drive URL."""
    value = settings.google_drive_folder_id.strip()
    if "/" in value:
        return value.rstrip("/").split("/")[-1]
    return value


def upload_resume(file_bytes: bytes, filename: str, mime_type: str = "application/pdf") -> str:
    """Upload a file to Google Drive and return a shareable URL."""
    service = _get_drive_service()
    file_metadata = {
        "name": filename,
        "parents": [_folder_id()],
    }
    media = MediaIoBaseUpload(io.BytesIO(file_bytes), mimetype=mime_type, resumable=False)
    file = service.files().create(
        body=file_metadata,
        media_body=media,
        fields="id",
    ).execute()

    file_id = file.get("id")

    # Make the file publicly readable
    service.permissions().create(
        fileId=file_id,
        body={"type": "anyone", "role": "reader"},
    ).execute()

    return f"https://drive.google.com/file/d/{file_id}/view?usp=sharing"
