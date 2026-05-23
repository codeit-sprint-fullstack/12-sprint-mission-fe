import { api } from "./api";

export async function getProducts(params) {
  const { data } = await api.get("/products", { params });
  return data;
}

export async function getProduct(productId) {
  const { data } = await api.get(`/products/${productId}`);
  return data;
}

export async function createProduct(payload) {
  const { data } = await api.post("/products", payload);
  return data;
}

export async function patchProduct(productId, payload) {
  const { data } = await api.patch(`/products/${productId}`, payload);
  return data;
}

export async function deleteProduct(productId) {
  const { data } = await api.delete(`/products/${productId}`);
  return data;
}

export async function toggleFavorite(productId, isFavorite) {
  if (isFavorite) {
    const { data } = await api.delete(`/products/${productId}/favorite`);
    return data;
  } else {
    const { data } = await api.post(`/products/${productId}/favorite`);
    return data;
  }
}
