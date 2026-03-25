import { BASE_URL, handleResponse } from "./api.js";

// 게시글 목록 조회
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  return fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
    .then(handleResponse)
    .catch((error) => {
      console.error("getArticleList error:", error);
      throw error;
    });
}

// 게시글 상세 조회
export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then(handleResponse)
    .catch((error) => {
      console.error("getArticle error:", error);
      throw error;
    });
}

// 게시글 생성
export function createArticle(title, content, image) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("createArticle error:", error);
      throw error;
    });
}

// 게시글 수정
export function patchArticle(articleId, title, content, image) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("patchArticle error:", error);
      throw error;
    });
}

// 게시글 삭제
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("deleteArticle error:", error);
      throw error;
    });
}
