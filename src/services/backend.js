import axios from 'axios';
const API_BASE = 'http://localhost:8000';

export const calculateRisk = async (location, week, base_premium) => {
  const res = await axios.post(`${API_BASE}/calculate`, { location, week, base_premium });
  return res.data;
};

export const checkFraud = async (user_id, event_id, signals) => {
  const res = await axios.post(`${API_BASE}/check`, { user_id, event_id, signals });
  return res.data;
};

export const getClaims = async () => {
  const res = await axios.get(`${API_BASE}/claims`);
  return res.data;
};

export const createClaim = async (claim) => {
  const res = await axios.post(`${API_BASE}/claims`, claim);
  return res.data;
};
