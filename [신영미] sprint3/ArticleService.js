// .then() 메서드를 이용하여 비동기 처리를 해주세요.
//.catch() 를 이용하여 오류 처리를 해주세요.
// 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
const SRC_URL = "https://panda-market-api-crud.vercel.app/Articles";

export function getArticleList(page, pageSize, keyword) {
  //GET 메서드를 사용해 주세요
  return fetch(
    `${SRC_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.error(`데이터 에러: ${res.status}`);
        return null;
      }
    })
    .catch((error) => {
      console.error(`네트워크 에러: ${error.message}`);
    });
}

export function getArticle(articleID) {
  //GET 메서드를 사용해 주세요
  return fetch(`${SRC_URL}/${articleID}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.error(`데이터 에러: ${res.status}`);
        return null;
      }
    })
    .catch((error) => {
      console.error(`네트워크 에러: ${error.message}`);
    });
}

export function createArticle(title, content, image) {
  //POST 메서드를 사용해 주세요
  // request body에 title, content, image 를 포함
  return fetch(SRC_URL, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title: title, content: content, image: image }),
  })
    .then((res) => {
      if (res.ok) {
        return true;
      } else {
        console.error(`데이터 에러: ${res.status}`);
        return false;
      }
    })
    .catch((error) => {
      console.error(`네트워크 에러: ${error.message}`);
      return false;
    });
}

export function patchArticle(articleID, title, content, image) {
  //PATCH 메서드를 사용해주세요
  return fetch(`${SRC_URL}/${articleID}`, {
    method: "PATCH",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title: title, content: content, image: image }),
  })
    .then((res) => {
      if (res.ok) {
        return true;
      } else {
        console.error(`데이터 에러: ${res.status}`);
        return false;
      }
    })
    .catch((error) => {
      console.error(`네트워크 에러: ${error.message}`);
      return false;
    });
}

export function deleteArticle(articleID) {
  // DELETE 메서드를 사용해 주세요
  return fetch(`${SRC_URL}/${articleID}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return true;
      } else {
        console.error(`데이터 에러: ${res.status}`);
        return false;
      }
    })
    .catch((error) => {
      console.error(`네트워크 에러: ${error.message}`);
      return false;
    });
}
