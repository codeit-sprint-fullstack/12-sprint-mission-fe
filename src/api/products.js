const BASE_URL = "https://panda-market-api.vercel.app";

/**
 * 상품 목록 조회
 * @param {Object} params
 * @param {number} params.page - 페이지 번호
 * @param {number} params.pageSize - 페이지당 항목 수
 * @param {'recent'|'favorite'} params.orderBy - 정렬 기준
 * @param {string} [params.keyword] - 검색 키워드
 */
export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  const params = new URLSearchParams({ page, pageSize, orderBy });
  if (keyword) params.set("keyword", keyword);

  const res = await fetch(`${BASE_URL}/products?${params}`);
  if (!res.ok) throw new Error(`상품 목록 조회 실패: ${res.status}`);
  return res.json();
  // { list: [...], totalCount: number }
}

/**
 * 베스트 상품 조회 (좋아요 순 상위 N개)
 * @param {number} pageSize - 가져올 개수
 */
export async function getBestProducts(pageSize = 4) {
  const params = new URLSearchParams({
    page: 1,
    pageSize,
    orderBy: "favorite",
  });
  const res = await fetch(`${BASE_URL}/products?${params}`);
  if (!res.ok) throw new Error(`베스트 상품 조회 실패: ${res.status}`);
  return res.json();
}
