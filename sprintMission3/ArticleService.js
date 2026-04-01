// Article API 관련 함수들을 작성
/*[ ]  'https://panda-market-api-crud.vercel.app/docs/#/Article' API를 이용하여 아래 함수들을 구현해 주세요.

[ ] getArticleList() : GET 메서드를 사용해 주세요.
[ ] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
[ ] getArticle() : GET 메서드를 사용해 주세요.
[ ] createArticle() : POST 메서드를 사용해 주세요.
[ ] request body에 title, content, image 를 포함해 주세요.
[ ] patchArticle() : PATCH 메서드를 사용해 주세요.
[ ] deleteArticle() : DELETE 메서드를 사용해 주세요.
[ ]  fetch 혹은 axios 를 이용해 주세요.
*/

const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

export async function getArticle(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const getProduct = await response.json();
    console.log(getProduct);
    return getProduct;
  } catch (error) {
    console.log("getArticleError : ", error);
  }
}

export async function getArticleList(page, pageSize, keyword) {
  const query = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });

  try {
    const response = await fetch(`${BASE_URL}?${query.toString()}`);
    const getProduct = await response.json();
    return getProduct;
  } catch (error) {
    console.log("getProductListError : ", error);
  }
}

export async function createArticle() {
  const data = {
    image: "https://example.com/...",
    content: "게시글 내용입니다.",
    title: "게시글 제목입니다.",
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const createeRsponse = await response.json();
    return createeRsponse;
  } catch (error) {
    console.log("createProductError :", error);
  }
}

export async function patchArticle(id) {
  const updates = {
    title: " 게시글 수정 테스트",
  };

  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    const updateProduct = await response.json();
    return updateProduct;
  } catch (error) {
    console.log("patchProductError :", error);
  }
}

export async function deleteArticle(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const getProduct = await response.json();
    return getProduct;
  } catch (error) {
    console.log("deleteArticleError : ", error);
  }
}
