# API Documentation

## Authentication
- `POST /token` — Get JWT token (see backend/common/auth.py)

## Policy Engine
- `GET /policies` — List all policies
- `POST /policies` — Create a new policy
- `GET /policies/{policy_id}` — Get a policy by ID

## Event Engine
- `GET /events` — List all events
- `POST /events` — Create a new event

## Risk Engine
- `POST /calculate` — Calculate dynamic premium and risk score

## Fraud Engine
- `POST /check` — Check trust score and risk level

## Claims Engine
- `GET /claims` — List all claims
- `POST /claims` — Create a new claim
- `GET /claims/{claim_id}` — Get a claim by ID

---

See backend/common/auth.py for authentication usage.
