# Backend Microservices Structure for VayuGuard

This folder will contain the FastAPI backend, organized for scalability and modularity.

## Structure
- `/policy` — Policy Engine (coverage, premium management)
- `/risk` — Risk Engine (dynamic pricing, ML integration)
- `/event` — Event Engine (external data ingestion)
- `/fraud` — Fraud Engine (trust scoring, anti-spoofing)
- `/claims` — Claims Engine (settlement, payout)
- `/common` — Shared models/utilities

## Getting Started
1. Each service should be a FastAPI app (can be run standalone or as part of a larger app).
2. Use async endpoints and background tasks for event-driven workflows.
3. Add Dockerfile for containerization.
4. Add requirements.txt for dependencies.

---

> Start by implementing `/policy` and `/event` as examples, then expand.
