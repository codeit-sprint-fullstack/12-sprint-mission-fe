const BASIC_URL = "https://panda-market-api-crud.vercel.app/articles";

export function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
  return fetch(
    `${BASIC_URL}/?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
  )
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP Error ${response.status}`);
        return;
      }

      return response.json();
    })
    .catch((error) => console.error(error));
}

export function getArticle(id) {
  return fetch(`${BASIC_URL}/${id}`)
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP Error ${response.status}`);
        return;
      }

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
  return fetch(`${BASIC_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP Error ${response.status}`);
        return;
      }

      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function patchArticle(id, title, content, image) {
  const data = {
    title,
    content,
    image,
  };
  return fetch(`${BASIC_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP Error ${response.status}`);
        return;
      }

      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteArticle(id) {
  return fetch(`${BASIC_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log(`HTTP Error ${response.status}`);
        return;
      }

      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
