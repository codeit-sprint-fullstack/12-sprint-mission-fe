const BASIC_URL = "https://panda-market-api-crud.vercel.app/articles";

export function getArticleList() {
  const page = 1;
  const pageSize = 1;
  const orderBy = "recent";
  const keyword = "";

  fetch(
    `${BASIC_URL}/?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}

export function getArticle(id) {
  fetch(`${BASIC_URL}/${id}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function createArticle(title, content, image) {
  const data = {
    title,
    content,
    image,
  };
  fetch(`${BASIC_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function patchArticle(id, title, content, image) {
  const data = {
    title,
    content,
    image,
  };
  fetch(`${BASIC_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function deleteArticle(id) {
  fetch(`${BASIC_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
