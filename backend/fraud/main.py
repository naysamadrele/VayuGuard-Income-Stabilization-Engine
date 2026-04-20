from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import random

app = FastAPI(title="VayuGuard Fraud Engine")

class FraudCheckInput(BaseModel):
    user_id: int
    event_id: int
    signals: List[float]

class FraudCheckOutput(BaseModel):
    trust_score: float
    risk_level: str

@app.post("/check", response_model=FraudCheckOutput)
def check_fraud(data: FraudCheckInput):
    # Simulate trust score and risk level
    trust_score = sum(data.signals) / len(data.signals)
    if trust_score > 0.85:
        risk_level = "low"
    elif trust_score > 0.5:
        risk_level = "medium"
    else:
        risk_level = "high"
    return FraudCheckOutput(trust_score=round(trust_score, 2), risk_level=risk_level)
