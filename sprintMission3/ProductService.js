/*[ ]  'https://panda-market-api-crud.vercel.app/docs/#/Product' API를 이용하여 아래 함수들을 구현해 주세요.

[ ] getProductList() : GET 메서드를 사용해 주세요.
[ ] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
[ ] getProduct() : GET 메서드를 사용해 주세요.
[ ] createProduct() : POST 메서드를 사용해 주세요.
[ ] request body에 name, description, price, tags, images 를 포함해 주세요.
[ ] patchProduct() : PATCH 메서드를 사용해 주세요.
[ ] deleteProduct() : DELETE 메서드를 사용해 주세요.
[ ]  async/await 을 이용하여 비동기 처리를 해주세요.

[ ]  try/catch 를 이용하여 오류 처리를 해주세요. */
const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const getProduct = await response.json();
    console.log(getProduct);
    return getProduct;
  } catch (error) {
    console.log("getProductError :", error);
  }
}

export async function getProductList(page, pageSize, keyword) {
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

export async function createProduct() {
  const data = {
    images: ["https://example.com/..."],
    tags: ["전자제품"],
    price: 0,
    description: "string",
    name: "상품 이름",
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

export async function patchProduct(id) {
  const updates = {
    name: "수정 테스트",
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

export async function deleteProduct(id) {
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
    console.log("deleteProduct : ", error);
  }
}
