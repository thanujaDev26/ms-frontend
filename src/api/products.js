import axios from "axios";

const PRODUCT_BASE = import.meta.env.VITE_PRODUCT_API;

export const getAllProducts = () => axios.get(PRODUCT_BASE);

export const getProductById = (id) => axios.get(`${PRODUCT_BASE}/${id}`);

export const createProduct = (data, token) =>
  axios.post(PRODUCT_BASE, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProduct = (id, data, token) =>
  axios.put(`${PRODUCT_BASE}/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteProduct = (id, token) =>
  axios.delete(`${PRODUCT_BASE}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
