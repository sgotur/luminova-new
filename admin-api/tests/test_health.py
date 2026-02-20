"""Basic smoke tests using TestClient (no AWS calls needed for health check)."""
import os
os.environ.setdefault("JWT_SECRET", "test-secret-for-testing")

from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
