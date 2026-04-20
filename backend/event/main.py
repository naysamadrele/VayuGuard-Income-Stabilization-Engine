from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from typing import List
import random

app = FastAPI(title="VayuGuard Event Engine")

class Event(BaseModel):
    id: int
    type: str
    location: str
    timestamp: str
    severity: float

# In-memory event log for demo
events: List[Event] = []

@app.get("/events", response_model=List[Event])
def list_events():
    return events

@app.post("/events", response_model=Event)
def create_event(event: Event, background_tasks: BackgroundTasks):
    events.append(event)
    # Simulate async processing (e.g., trigger risk engine)
    background_tasks.add_task(process_event, event)
    return event

def process_event(event: Event):
    # Placeholder for event-driven logic
    print(f"Processing event: {event}")
    # In production, trigger downstream services
