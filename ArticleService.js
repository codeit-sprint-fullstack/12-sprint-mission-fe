const ARTICLES = "https://panda-market-api-crud.vercel.app/articles";

export function getArticleList(page, pageSize, keyword) {
  return fetch(
    `${ARTICLES}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
    .then(function (res) {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      throw err;
    });
}

export function getArticle(articleId) {
  return fetch(`${ARTICLES}/${articleId}`)
    .then(function (res) {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      throw err;
    });
}

export function createArticle(title, content, image) {
  return fetch(ARTICLES, {
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
    .then(function (res) {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      throw err;
    });
}

export function patchArticle(articleId, title, content, image) {
  return fetch(`${ARTICLES}/${articleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then(function (res) {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      throw err;
    });
}

export function deleteArticle(articleId) {
  return fetch(`${ARTICLES}/${articleId}`, {
    method: "DELETE",
  })
    .then(function (res) {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res;
    })
    .then(function (data) {
      return data;
    })
    .catch(function (err) {
      throw err;
    });
}
