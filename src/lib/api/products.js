import { api } from "./client";

export const getProducts = ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
  return api.get(`/products?${params}`);
};

export const getProduct = (id) =>
  api.get(`/products/${id}`, { cache: `no-store` });

export const createProduct = (data) => api.post(`/products`, data);

export const updateProduct = (id, fields) =>
  api.patch(`/products/${id}`, fields);

export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const toggleProductFavorite = (productId, nextLiked) => {
  return nextLiked
    ? api.post(`/products/${productId}/favorite`)
    : api.delete(`/products/${productId}/favorite`);
};

export const getProductComments = async ({ productId, cursor, limit = 10 }) => {
  const params = new URLSearchParams({ limit });
  if (cursor) {
    params.append("cursor", cursor);
  }

  const response = await api.get(`/products/${productId}/comments?${params}`);

  return {
    ...response,
    data: response.list,
    nextCursor: response.nextCursor,
  };
};

export const createProductComment = (productId, content) =>
  api.post(`/products/${productId}/comments`, { content });
