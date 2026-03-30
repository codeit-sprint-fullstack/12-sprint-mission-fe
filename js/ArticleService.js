const URL = "https://panda-market-api-crud.vercel.app/articles";

export const getArticleList = (page, pageSize, keyword) => {
  const query = `?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  return fetch(URL + query)
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생! 상태 코드 : ${res.status}`);
        throw new Error("서버에서 데이터를 가져오지 못했습니다.");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getArticle = (articleId) => {
  return fetch(`${URL}/${articleId}`)
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생! 상태 코드 : ${res.status}`);
        throw new Error("서버에서 데이터를 가져오지 못했습니다.");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const createArticle = (title, content, image) => {
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생! 상태 코드 : ${res.status}`);
        throw new Error("서버에서 데이터를 가져오지 못했습니다.");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const patchArticle = ({ updateId, updates }) => {
  return fetch(`${URL}/${updateId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생! 상태 코드 : ${res.status}`);
        throw new Error("서버에서 데이터를 수정하지 못했습니다.");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deleteArticle = (deleteId) => {
  return fetch(`${URL}/${deleteId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        console.error(`에러 발생! 상태 코드 : ${res.status}`);
        throw new Error("서버에서 데이터를 삭제하지 못했습니다.");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
