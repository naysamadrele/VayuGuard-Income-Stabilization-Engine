from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI(title="VayuGuard Policy Engine")

class Policy(BaseModel):
    id: int
    user_id: int
    premium: float
    coverage_start: str
    coverage_end: str
    status: str

# In-memory store for demo
policies: List[Policy] = []

@app.get("/policies", response_model=List[Policy])
def list_policies():
    return policies

@app.post("/policies", response_model=Policy)
def create_policy(policy: Policy):
    policies.append(policy)
    return policy

@app.get("/policies/{policy_id}", response_model=Policy)
def get_policy(policy_id: int):
    for p in policies:
        if p.id == policy_id:
            return p
    raise HTTPException(status_code=404, detail="Policy not found")
