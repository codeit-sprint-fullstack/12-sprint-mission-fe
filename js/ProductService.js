const BASE_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
} = {}) {
  try {
    const res = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("상품 목록 조회 API 요청 실패:", err);
    throw err;
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("특정 상품 조회 API 요청 실패:", err);
    throw err;
  }
}

export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, tags, images }),
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("상품 생성 API 요청 실패:", err);
    throw err;
  }
}
