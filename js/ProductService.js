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
    console.error("API 요청 실패:", err);
    throw err;
  }
}
