import { BASE_URL, handleResponse } from "./api";

export async function getArticleList({
  offset = 0,
  limit = 10,
  keyword = "",
  orderBy = "recent",
} = {}) {
  try {
    const response = await fetch(
      `${BASE_URL}/articles?offset=${offset}&limit=${limit}&keyword=${keyword}&orderBy=${orderBy}`,
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("getArticleList error:", error);

    return {
      list: [],
      totalCount: 0,
    };
  }
}

export async function getArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`);

  return handleResponse(response);
}

export async function createArticle({ title, content, image = null }) {
  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  });

  return handleResponse(response);
}

export async function patchArticle(
  articleId,
  { title, content, image = null },
) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  });

  return handleResponse(response);
}

export async function deleteArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  });

  return handleResponse(response);
}

export async function getArticleComments(
  articleId,
  { cursor, limit = 5 } = {},
) {
  const searchParams = new URLSearchParams();

  if (cursor) searchParams.set("cursor", cursor);
  searchParams.set("limit", limit);

  const response = await fetch(
    `${BASE_URL}/articles/${articleId}/comments?${searchParams.toString()}`,
  );

  return handleResponse(response);
}

export async function createArticleComment(articleId, content) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  return handleResponse(response);
}

export async function patchArticleComment(commentId, content) {
  const response = await fetch(`${BASE_URL}/articles/comments/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  return handleResponse(response);
}

export async function deleteArticleComment(commentId) {
  const response = await fetch(`${BASE_URL}/articles/comments/${commentId}`, {
    method: "DELETE",
  });

  return handleResponse(response);
}
