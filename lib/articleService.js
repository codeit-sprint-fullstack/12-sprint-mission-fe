const API_URL = "https://one2-sprint-mission-be-0389.onrender.com";

export async function getArticleList(
  page = 1,
  pageSize = 20,
  keyword = "",
  orderBy = "recent",
) {
  try {
    const query = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
      keyword,
      orderBy,
    });
    const response = await fetch(`${API_URL}/articles?${query.toString()}`);
    if (!response.ok) throw new Error(`서버 에러: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("게시글 목록 요청 실패:", error);
    throw error;
  }
}

export async function getArticleDetail(articleId) {
  try {
    const response = await fetch(`${API_URL}/articles/${articleId}`);
    if (!response.ok) throw new Error(`서버 에러: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("게시글 상세 요청 실패:", error);
    throw error;
  }
}

export async function getArticleComments(articleId) {
  try {
    const response = await fetch(`${API_URL}/articles/${articleId}/comments`);
    if (!response.ok) throw new Error(`서버 에러: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("댓글 목록 요청 실패:", error);
    throw error;
  }
}

export async function createArticleComment(articleId, commentData) {
  try {
    const response = await fetch(`${API_URL}/articles/${articleId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `댓글 등록 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("댓글 등록 요청 실패:", error);
    throw error;
  }
}

export async function updateComment(commentId, updateData) {
  try {
    const response = await fetch(`${API_URL}/comments/${commentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `댓글 수정 실패: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("댓글 수정 요청 실패:", error);
    throw error;
  }
}

export async function deleteComment(commentId) {
  try {
    const response = await fetch(`${API_URL}/comments/${commentId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `댓글 삭제 실패: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error("댓글 삭제 요청 실패:", error);
    throw error;
  }
}

export async function createArticle(articleData) {
  try {
    const response = await fetch(`${API_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `게시글 등록 실패: ${response.status}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 등록 요청 실패:", error);
    throw error;
  }
}

export async function updateArticle(articleId, updateData) {
  try {
    const response = await fetch(`${API_URL}/articles/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `게시글 수정 실패: ${response.status}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error("게시글 수정 요청 실패:", error);
    throw error;
  }
}

export async function deleteArticle(articleId) {
  try {
    const response = await fetch(`${API_URL}/articles/${articleId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || `게시글 삭제 실패: ${response.status}`,
      );
    }
    return true;
  } catch (error) {
    console.error("게시글 삭제 요청 실패:", error);
    throw error;
  }
}
