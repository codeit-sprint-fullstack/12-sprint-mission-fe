//======article=========
const BASE_URL_ARTICLE = "http://localhost:4000/articles";

export const getArticleList = (page, pageSize, keyword) => {
  return fetch(
    `${BASE_URL_ARTICLE}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  ) //get은 defualt라서 여기까지만 써줘도 됨
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`200대가 아님. status:${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log("GET: article list =>", result);
      return result;
    })
    .catch((e) => alert(`에러! ${e}`));
};
export const getArticle = (id) => {
  return fetch(`${BASE_URL_ARTICLE}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`200대가 아님. status:${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log("GET: article =>", result);
      return result;
    })
    .catch((e) => alert(`에러! ${e}`));
};
export const createArticle = (title, content, image) => {
  const requestBody = {
    title,
    content,
    image,
  };
  return fetch(`${BASE_URL_ARTICLE}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`200대가 아님. status:${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log("POST: article=>", result);
      return result;
    })
    .catch((e) => alert(`에러! ${e}`));
};
export const patchArticle = (modifiedArticle) => {
  return fetch(`${BASE_URL_ARTICLE}/${modifiedArticle.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedArticle),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`200대가 아님. status:${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log("PATCH: article=>", result);
      return result;
    })
    .catch((e) => alert(`에러! ${e}`));
};
export const deleteArticle = (id) => {
  return fetch(`${BASE_URL_ARTICLE}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`200대가 아님. status:${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log(`DELETE: article=>`, result);
      return result;
    })
    .catch((e) => alert(`에러! ${e}`));
};
