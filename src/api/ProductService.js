const API_URL = "http://localhost:4000/api";

export async function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent"
) {
  try {
    const query = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
      keyword,
      orderBy,
    });

    const response = await fetch(`${API_URL}/products?${query.toString()}`);

    if (!response.ok) throw new Error(`서버 에러: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("요청 실패:", error);
    throw error;
  }
}

export async function createProduct(productData) {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `등록 실패: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("등록 요청 실패:", error);
    throw error;
  }
}
