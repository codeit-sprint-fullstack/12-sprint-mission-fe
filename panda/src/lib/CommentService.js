import { api } from "./api";

export async function getProductComments(
  productId,
  { cursor, limit = 10 } = {},
) {
  const response = await api.get(`/products/${productId}/comments`, {
    params: { cursor, limit },
  });

  return response.data;
}

export async function createProductComment(productId, content) {
  const response = await api.post(`/products/${productId}/comments`, {
    content,
  });

  return response.data;
}

export async function updateComment(commentId, content) {
  const response = await api.patch(`/comments/${commentId}`, {
    content,
  });

  return response.data;
}

export async function deleteComment(commentId) {
  const response = await api.delete(`/comments/${commentId}`);
  return response.data;
}
