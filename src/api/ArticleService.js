import { API_ENDPOINTS } from "../config/index.js";
import { request } from "./request.js";

const BASE_URL = API_ENDPOINTS.articles;

/**
 * 1. 게시글 목록 조회 (GET /articles)
 * 파라미터: page, pageSize, orderBy(recent/like), keyword
 */
export const getArticleList = (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
) => {
  const params = new URLSearchParams({ page, pageSize, orderBy });

  if (keyword) {
    params.append("keyword", keyword);
  }

  return request(`${BASE_URL}?${params.toString()}`);
};

/**
 * 2. 게시글 생성 (POST /articles)
 * Request body: image, content, title
 */
export const createArticle = (articleData) => {
  return request(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(articleData),
  });
};

/**
 * 3. 게시글 상세 조회 (GET /articles/{articleId})
 */
export const getArticle = (articleId) => {
  if (!articleId) {
    throw new Error("articleId is required");
  }
  return request(`${BASE_URL}/${articleId}`);
};

/**
 * 4. 게시글 수정 (PATCH /articles/{articleId})
 */
export const patchArticle = (articleId, updateData) => {
  return request(`${BASE_URL}/${articleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });
};

/**
 * 5. 게시글 삭제 (DELETE /articles/{articleId})
 */
export const deleteArticle = (articleId) => {
  return request(`${BASE_URL}/${articleId}`, {
    method: "DELETE",
  });
};
