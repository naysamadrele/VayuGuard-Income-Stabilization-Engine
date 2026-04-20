import axios from 'axios';

const API_BASE = 'http://localhost:8000'; // Update as needed

export const getPolicies = async () => {
  const res = await axios.get(`${API_BASE}/policies`);
  return res.data;
};

export const createPolicy = async (policy) => {
  const res = await axios.post(`${API_BASE}/policies`, policy);
  return res.data;
};

export const getEvents = async () => {
  const res = await axios.get(`${API_BASE}/events`);
  return res.data;
};

export const createEvent = async (event) => {
  const res = await axios.post(`${API_BASE}/events`, event);
  return res.data;
};
