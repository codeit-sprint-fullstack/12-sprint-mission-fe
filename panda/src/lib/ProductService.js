import { api } from "./api";

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
} = {}) {
  const response = await api.get("/products", {
    params: {
      page,
      pageSize,
      keyword,
      orderBy,
    },
  });

  return response.data;
}

export async function getProduct(productId) {
  const response = await api.get(`/products/${productId}`);
  return response.data;
}

export async function createProduct({ name, description, price, tags, image }) {
  const response = await api.post("/products", {
    name,
    description,
    price,
    tags,
    image,
  });

  return response.data;
}

export async function patchProduct(productId, payload) {
  const response = await api.patch(`/products/${productId}`, payload);
  return response.data;
}

export async function deleteProduct(productId) {
  const response = await api.delete(`/products/${productId}`);
  return response.data;
}

export async function favoriteProduct(productId) {
  const response = await api.post(`/products/${productId}/favorite`);
  return response.data;
}

export async function unfavoriteProduct(productId) {
  const response = await api.delete(`/products/${productId}/favorite`);
  return response.data;
}
