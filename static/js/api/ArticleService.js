const API_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList(
  page = 1, // 불러올 페이지 default 1
  pageSize = 10, // 불러올 상품 수 default 10
  orderBy = "recent", // 불러올 정렬방식 default recent (최신순)
  keyword = "", // 검색 키워드 default ''
) {
  return fetch(
    `${API_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${keyword ? "&keyword=" + keyword : ""}`,
  )
    .then((res) => {
      if (!res.ok) {
        console.error(`에러발생: ${res.status} ${res.statusText}`);
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

export function getArticle(id) {
  return fetch(`${API_URL}/articles/${id}`)
    .then((res) => {
      if (!res.ok) {
        console.error(`에러발생: ${res.status} ${res.statusText}`);
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

export function createArticle(article) {
  const { title, content, image } = article;

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
    .then((res) => {
      if (!res.ok) {
        console.error(`에러발생: ${res.status} ${res.statusText}`);
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

export function patchArticle(id, data) {
  return fetch(`${API_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러발생: ${res.status} ${res.statusText}`);
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}

export function deleteArticle(id) {
  return fetch(`${API_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러발생: ${res.status} ${res.statusText}`);
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.error(err));
}
