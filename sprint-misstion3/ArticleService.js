const API_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList(page, pageSize, keyword = "") {
  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    keyword,
  });

  return fetch(`${API_URL}/articles?${query.toString()}`)
    .then((response) => {
      if (!response.ok) {
        console.error(`getArticleList 에러: ${response.status}`);
        throw new Error(`error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("getArticleList 요청 실패:", error);
      throw error;
    });
}

export function getArticle(articleId) {
  return fetch(`${API_URL}/articles/${articleId}`)
    .then((response) => {
      if (!response.ok) {
        console.error(`getArticle 에러: ${response.status}`);
        throw new Error(`error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("getArticle 요청 실패:", error);
      throw error;
    });
}

export function createArticle(title, content, image) {
  return fetch(`${API_URL}/articles`, {
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
    .then((response) => {
      if (!response.ok) {
        console.error(`createArticle 에러: ${response.status}`);
        throw new Error(`error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("createArticle 요청 실패:", error);
      throw error;
    });
}

export function patchArticle(articleData) {
  const { articleId, inputs } = articleData;

  return fetch(`${API_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
  })
    .then((response) => {
      if (!response.ok) {
        console.error(`patchArticle 에러: ${response.status}`);
        throw new Error(`error: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("patchArticle 요청 실패:", error);
      throw error;
    });
}

export function deleteArticle(articleId) {
  return fetch(`${API_URL}/articles/${articleId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        console.error(`deleteArticle 에러: ${response.status}`);
        throw new Error(`error: ${response.status}`);
      }
      return true;
    })
    .catch((error) => {
      console.error("deleteArticle 요청 실패:", error);
      throw error;
    });
}
