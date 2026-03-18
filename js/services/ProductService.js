const BASE_URL = "https://panda-market-api-crud.vercel.app";

async function handleResponse(response) {
  if (!response.ok) {
    console.error(`Error: ${response.status}`);
    throw new Error(response.statusText);
  }
  return response.json();
}

// 상품 목록 조회
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    return await handleResponse(response);
  } catch (error) {
    console.error("getProductList error:", error);
  }
}

// 상품 상세 조회
export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("getProduct error:", error);
  }
}

// 상품 생성
export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("createProduct error:", error);
  }
}

// 상품 수정
export async function patchProduct(
  productId,
  name,
  description,
  price,
  tags,
  images,
) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("patchProduct error:", error);
  }
}

// 상품 삭제
export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });

    return await handleResponse(response);
  } catch (error) {
    console.error("deleteProduct error:", error);
  }
}
