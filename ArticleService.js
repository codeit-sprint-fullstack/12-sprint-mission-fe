const BASE_URL = "https://panda-market-api-crud.vercel.app";

export const getArticleList = (page, pageSize, keyword) => {
  return fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
    .then((response) => {
      if (!response.ok) {
        console.log("에러!");
        throw new Error(`서버 오류: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        console.log("에러!");
        throw new Error(`서버 오류: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const createArticle = (title, content, image) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("에러!");
        throw new Error(`서버 오류: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const patchArticle = (id, updateData) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("에러!");
        throw new Error(`서버 오류: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        console.log("에러!");
        throw new Error(`서버 오류: ${response.status}`);
      }
      return;
    })
    .catch((error) => console.log(error));
};
