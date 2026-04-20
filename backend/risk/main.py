from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import random

app = FastAPI(title="VayuGuard Risk Engine")

class RiskInput(BaseModel):
    location: str
    week: str
    base_premium: float

class RiskOutput(BaseModel):
    dynamic_premium: float
    risk_score: float

@app.post("/calculate", response_model=RiskOutput)
def calculate_risk(data: RiskInput):
    # Simulate dynamic premium and risk score
    risk_score = random.uniform(0.1, 1.0)
    dynamic_premium = data.base_premium * (1 + risk_score * 0.3)
    return RiskOutput(dynamic_premium=round(dynamic_premium, 2), risk_score=round(risk_score, 2))
