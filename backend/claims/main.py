from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="VayuGuard Claims Engine")

class Claim(BaseModel):
    id: int
    user_id: int
    event_id: int
    amount: float
    status: str

claims: List[Claim] = []

@app.get("/claims", response_model=List[Claim])
def list_claims():
    return claims

@app.post("/claims", response_model=Claim)
def create_claim(claim: Claim):
    claims.append(claim)
    return claim

@app.get("/claims/{claim_id}", response_model=Claim)
def get_claim(claim_id: int):
    for c in claims:
        if c.id == claim_id:
            return c
    return {"error": "Claim not found"}
