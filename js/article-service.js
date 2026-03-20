import { BASE_URL } from "./main.js";
// -------------------------------------------
//             게시글 목록 CRUD
// -------------------------------------------
// 1. 게시글 목록 조회하기 (then, catch 사용)
export function getArticelList(page, pageSize, keyword) {
  !keyword
    ? fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}`)
    : fetch(
        `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
      )
        .then((response) => response.json())
        .then((articleList) =>
          console.log("1. 게시글 목록 조회 => ", articleList),
        )
        .catch((error) => console.error(error));
}

// 2. 게시글 상세 조회하기 (then, catch 사용)
export function getArticle(id) {
  fetch(`${BASE_URL}/articles/${id}`)
    .then((response) => response.json())
    .then((article) => console.log("2. 게시글 상세 조회 => ", article))
    .catch((error) => console.error(error));
}

// 3. 게시글 작성하기 (then, catch 사용)
export function createArticle(title, content, image) {
  const newArticle = {
    title,
    content,
    image,
  };

  fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  })
    .then((response) => response.json())
    .then((createdArticle) => console.log("3. 게시글 작성 => ", createdArticle))
    .catch((error) => console.error(error));
}

// 4. 게시글 수정하기 (then, catch 사용)
export function patchArticle(id, title, content, image) {
  const updatedArticle = {
    title,
    content,
    image,
  };

  fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedArticle),
  })
    .then((response) => response.json())
    .then((patchedArticle) => console.log("4. 게시글 수정 => ", patchedArticle))
    .catch((error) => console.error(error));
}

// 5. 게시글 삭제하기 (then, catch 사용)
export function deleteArticle(id) {
  fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((deletedArticle) => console.log("5. 게시글 삭제 => ", deletedArticle))
    .catch((error) => console.error(error));
}

// 1. 게시글 목록 조회하기 (async/await 사용)
// export async function getArticelList(page, pageSize, keyword) {
//   try {
//     const response = !keyword
//       ? await fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}`)
//       : await fetch(
//           `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
//         );

//     if (!response.ok) {
//       throw new Error("데이터 로드 실패");
//     }

//     const articleList = await response.json();
//     console.log("1. 게시글 목록 조회 => ", articleList);
//   } catch (error) {
//     console.error(error);
//   }
// }

// 2. 게시글 상세 조회하기 (async/await 사용)
// export async function getArticle(id) {
//   try {
//     const response = await fetch(`${BASE_URL}/articles/${id}`);
//     if (!response.ok) {
//       throw new Error("데이터 로드 실패");
//     }

//     const article = await response.json();
//     console.log("2. 게시글 상세 조회 => ", article);
//   } catch (error) {
//     console.error(error);
//   }
// }

// 3. 게시글 작성하기 (async/await 사용)
// export async function createArticle(title, content, image) {
//   const newArticle = {
//     title,
//     content,
//     image,
//   };

//   try {
//     const response = await fetch(`${BASE_URL}/articles`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newArticle),
//     });

//     if (!response.ok) {
//       throw new Error("게시글 생성 실패");
//     }

//     const createdArticle = await response.json();
//     console.log("3. 게시글 작성 => ", createdArticle);
//   } catch (error) {
//     console.error(error);
//   }
// }

// 4. 게시글 수정하기 (async/await 사용)
// export async function patchArticle(id, title, content, image) {
//   const updatedArticle = {
//     title,
//     content,
//     image,
//   };

//   try {
//     const response = await fetch(`${BASE_URL}/articles/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedArticle),
//     });

//     if (!response.ok) {
//       throw new Error("게시글 수정 실패");
//     }

//     const patchedArticle = await response.json();
//     console.log("4. 게시글 수정 => ", patchedArticle);
//   } catch (error) {
//     console.error(error);
//   }
// }

// 5. 게시글 삭제하기 (async/await 사용)
// export async function deleteArticle(id) {
//   try {
//     const response = await fetch(`${BASE_URL}/articles/${id}`, {
//       method: "DELETE",
//     });

//     if (!response.ok) {
//       throw new Error("게시글 삭제 실패");
//     }

//     const deletedArticle = await response.json();
//     console.log("5. 게시글 삭제 => ", deletedArticle);
//   } catch (error) {
//     console.error(error);
//   }
// }
