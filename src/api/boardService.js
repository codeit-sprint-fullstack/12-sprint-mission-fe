const ARTICLE_API_URL =
  process.env.NEXT_PUBLIC_ARTICLE_API_URL ||
  "https://panda-market-api-crud.vercel.app/articles";
const COMMENT_API_URL = ARTICLE_API_URL.replace("/articles", "/comments");

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `API request failed: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

function buildQuery(params) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, value);
    }
  });

  return query.toString();
}

export async function getArticleList({
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
} = {}) {
  const query = buildQuery({ page, pageSize, keyword, orderBy });
  return request(`${ARTICLE_API_URL}?${query}`, { cache: "no-store" });
}

export async function getArticle(id) {
  return request(`${ARTICLE_API_URL}/${id}`, { cache: "no-store" });
}

export async function createArticle(data) {
  return request(ARTICLE_API_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function patchArticle(id, data) {
  return request(`${ARTICLE_API_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function deleteArticle(id) {
  return request(`${ARTICLE_API_URL}/${id}`, {
    method: "DELETE",
  });
}

export async function getCommentList(articleId) {
  return request(`${ARTICLE_API_URL}/${articleId}/comments`, {
    cache: "no-store",
  });
}

export async function createComment(articleId, data) {
  return request(`${ARTICLE_API_URL}/${articleId}/comments`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function patchComment(articleId, commentId, data) {
  return request(`${COMMENT_API_URL}/${commentId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function deleteComment(articleId, commentId) {
  return request(`${COMMENT_API_URL}/${commentId}`, {
    method: "DELETE",
  });
}
