const API_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "fs12-sim-test-img", //꺠진 이미지가 너무 많아 임의데이터를 넣고 불러오기로 했습니다.
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
