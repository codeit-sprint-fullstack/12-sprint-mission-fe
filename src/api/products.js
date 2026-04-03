const API_URL = "https://panda-market-api.vercel.app";

export async function getProductList(
  page = 1, // 불러올 페이지 default 1
  pageSize = 10, // 불러올 상품 수 default 10
  orderBy = "recent", // 불러올 정렬방식 default recent (최신순)
  keyword = "", // 검색 키워드 default ''
) {
  try {
    const res = await fetch(
      `${API_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${keyword ? "&keyword=" + keyword : ""}`,
    );
    if (!res.ok) {
      console.error(`에러발생: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }
    const products = await res.json();

    return products;
  } catch (error) {
    console.error(error);
    return { list: [], totalCount: 0 };
  }
}
