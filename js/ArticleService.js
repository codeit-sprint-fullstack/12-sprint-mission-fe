const BASE_ULR = "https://panda-market-api-crud.vercel.app/";

export function getArticleList(
  page = 1,
  pageSize = 10,
  orderby = "recent",
  keyword = "",
) {
  const res = new URLSearchParams();
  res.set("page", page);
  res.set("pageSize", pageSize);
  res.set("orderby", orderby);
  if (keyword.trim()) {
    res.set("keyword", keyword);
  }

  return fetch(`${BASE_URL}/articles?${res.toString()}`, { method: "GET" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 수정 실패");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("article error", error);
      throw error;
    });
}

export function createArticle(image, content, title) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image, content, title }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 입력 실패");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("article error", error);
      throw error;
    });
}

export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articlesId}`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 가져오기 실패");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("article error", error);
      throw error;
    });
}

export function patchArticle(articleId, data) {
  return fetch(`${BASE_URL}/articles/${articlesId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 수정 실패");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("article error", error);
      throw error;
    });
}

export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articlesId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("게시글 삭제 실패");
      }

      return response.json();
    })
    .catch((error) => {
      console.error("article error", error);
      throw error;
    });
}
