import pytest
from fastapi.testclient import TestClient
from policy.main import app as policy_app

def test_list_policies():
    client = TestClient(policy_app)
    response = client.get("/policies")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
