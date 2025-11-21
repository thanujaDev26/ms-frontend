import axios from "axios";

const AUTH_BASE = "http://localhost:8080/api/auth";

export const registerUser = (data) =>
  axios.post(`${AUTH_BASE}/register`, data);

export const loginUser = (data) =>
  axios.post(`${AUTH_BASE}/login`, data);
