import { api } from "./client";
import { POST_LIMIT } from "@/constants/pagination";

export const getArticles = ({
  page = 1,
  pageSize = POST_LIMIT,
  orderBy = "recent",
  keyword = "",
}) => {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
  return api.get(`/articles?${params}`);
};

export const getArticle = (id) => api.get(`/articles/${id}`);

export const createArticle = (data) => api.post(`/articles`, data);

export const updateArticle = (id, fields) =>
  api.patch(`/articles/${id}`, fields);

export const deleteArticle = (id) => api.delete(`/articles/${id}`);

export const getArticleComments = ({ articleId, cursor, take = 10 }) => {
  const params = new URLSearchParams({ take });
  if (cursor) params.append("cursor", cursor);
  return api.get(`/articles/${articleId}/comments?${params}`);
};

export const createArticleComment = (articleId, content) =>
  api.post(`/articles/${articleId}/comments`, { content });
