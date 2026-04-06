const API_URL = "https://pandamarket-0uw0.onrender.com";

export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const offset = (page - 1) * pageSize;
    const res = await fetch(
      `${API_URL}/products?offset=${offset}&limit=${pageSize}${keyword ? "&search=" + keyword : ""}`,
    );
    if (!res.ok) {
      console.error(`상품 조회 실패: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }
    const products = await res.json();

    return { list: products, totalCount: products.length };
  } catch (error) {
    console.error(error);
    return { list: [], totalCount: 0 };
  }
}

export async function createProduct(productData) {
  try {
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (!res.ok) {
      console.error(`상품 등록 실패: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
