const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiClient(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const headers = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || errorData.message || `서버 에러: ${response.status}`,
      );
    }

    if (response.status === 204 || options.method === "DELETE") {
      return true;
    }

    return await response.json();
  } catch (error) {
    console.error(
      `API 요청 실패 (${options.method || "GET"} ${endpoint}):`,
      error.message,
    );
    throw error;
  }
}

//  게시글 관련 함수
export async function getArticleList(
  page = 1,
  pageSize = 20,
  keyword = "",
  orderBy = "recent",
) {
  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    keyword,
    orderBy,
  });

  const result = await apiClient(`/articles?${query.toString()}`);

  return result?.list || result || [];
}

export async function getArticleDetail(articleId) {
  return apiClient(`/articles/${articleId}`);
}

export async function createArticle(articleData) {
  return apiClient("/articles", {
    method: "POST",
    body: JSON.stringify(articleData),
  });
}

export async function updateArticle(articleId, updateData) {
  return apiClient(`/articles/${articleId}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
  });
}

export async function deleteArticle(articleId) {
  return apiClient(`/articles/${articleId}`, {
    method: "DELETE",
  });
}

// 댓글 관련 함수
export async function getArticleComments(articleId, limit = 10) {
  const query = new URLSearchParams({
    limit: String(limit),
  });
  return apiClient(`/articles/${articleId}/comments?${query.toString()}`);
}

export async function createArticleComment(articleId, commentData) {
  return apiClient(`/articles/${articleId}/comments`, {
    method: "POST",
    body: JSON.stringify(commentData),
  });
}

export async function updateComment(commentId, updateData) {
  return apiClient(`/comments/${commentId}`, {
    method: "PATCH",
    body: JSON.stringify(updateData),
  });
}

export async function deleteComment(commentId) {
  return apiClient(`/comments/${commentId}`, {
    method: "DELETE",
  });
}
