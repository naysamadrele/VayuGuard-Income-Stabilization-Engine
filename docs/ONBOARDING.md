# VayuGuard Developer Onboarding

## Project Structure
- `/Arcane-Logic-` — Frontend (Vite + React)
- `/Arcane-Logic-/backend` — Backend (FastAPI microservices)
- `/Arcane-Logic-/docs` — Documentation

## Local Development

### Frontend
```sh
cd Arcane-Logic-
npm install
npm run dev
```

### Backend (example: Policy Engine)
```sh
cd Arcane-Logic-/backend
pip install -r requirements.txt
uvicorn policy.main:app --reload
```

## Docker
- Build and run frontend/backend containers using provided Dockerfiles.

## Scaling & Next Steps
- Modularize backend into more services (see backend/README.md)
- Add real API integrations (weather, platform, etc.)
- Add i18n, PWA, and a11y to frontend
- Set up cloud deployment (Kubernetes, serverless, etc.)

---

See `docs/frontend-scaling.md` and `backend/README.md` for more.
