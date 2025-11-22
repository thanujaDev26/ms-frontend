import axios from "axios";

const AUTH_BASE = import.meta.env.VITE_AUTH_API;

export const registerUser = (data) =>
  axios.post(`${AUTH_BASE}/register`, data);

export const loginUser = (data) =>
  axios.post(`${AUTH_BASE}/login`, data);
