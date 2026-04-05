const BASE_URL = "https://panda-market-api.vercel.app/products";

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const product = await response.json();
    console.log(product);
    return product;
  } catch (error) {
    console.log("getProductError :", error);
  }
}

export async function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent"
) {
  const query = new URLSearchParams({
    page,
    pageSize,
    keyword,
    orderBy,
  });

  const response = await fetch(`${BASE_URL}?${query.toString()}`);
  return response.json();
}

export async function createProduct(data) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const createdResponse = await response.json();
    return createdResponse;
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
    const product = await response.json();
    return product;
  } catch (error) {
    console.log("deleteProduct : ", error);
  }
}
