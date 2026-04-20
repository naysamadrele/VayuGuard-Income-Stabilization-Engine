# Dockerfile for VayuGuard Backend (FastAPI)
FROM python:3.11-slim

WORKDIR /app

COPY ./policy ./policy
COPY ./event ./event
COPY ./common ./common
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

# Default: run policy engine (can be overridden)
CMD ["uvicorn", "policy.main:app", "--host", "0.0.0.0", "--port", "8000"]
