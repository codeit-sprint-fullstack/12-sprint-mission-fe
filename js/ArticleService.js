const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const url = `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        console.error("목록 조회 실패!");
      }
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("네트워크 에러:", error);
    });
}

export function getArticle(articleId) {
  const url = `${BASE_URL}/articles/${articleId}`;

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        console.error(articleId + `번 글을 가져오는 걸 실패했습니다.`);
      }
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("상세 조회 중 오류 발생:", error);
    });
}

export function createArticle(title, content, image) {
  const url = `${BASE_URL}/articles`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then(function (response) {
      if (!response.ok) {
        console.error("게시글 생성 실패");
      }
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("네트워크 에러", error);
    });
}
export function patchArticle(articleId, title, content, image) {
  const url = `${BASE_URL}/articles/${articleId}`;

  return fetch(url, {
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
    .then(function (response) {
      if (!response.ok) {
        console.error(articleId + "번 게시글 수정 실패");
      }
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("수정 중 네트워크 에러:", error);
    });
}

// 5. 게시글 삭제 함수 (DELETE)
export function deleteArticle(articleId) {
  const url = `${BASE_URL}/articles/${articleId}`;

  return fetch(url, {
    method: "DELETE", // [핵심] 삭제하겠다는 신호!
    // 삭제할 때는 보낼 내용(body)이 없어서 headers와 body를 안 써도 됩니다.
  })
    .then(function (response) {
      if (!response.ok) {
        console.error(articleId + "번 게시글 삭제 실패");
      }
      // 삭제 성공 시 서버가 빈 데이터를 줄 수도 있으니 확인용으로 리턴!
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error("삭제 중 에러 발생:", error);
    });
}
