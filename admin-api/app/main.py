from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.auth.router import router as auth_router
from app.resources.router import router as resources_router
from app.jobs.router import router as jobs_router
from app.jobs.public_router import public_router as jobs_public_router
from app.employees.router import router as employees_router

app = FastAPI(title="Luminova Admin API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api")
app.include_router(resources_router, prefix="/api")
app.include_router(jobs_router, prefix="/api")
app.include_router(jobs_public_router, prefix="/api")
app.include_router(employees_router, prefix="/api")


@app.get("/api/health")
async def health():
    return {"status": "ok"}
