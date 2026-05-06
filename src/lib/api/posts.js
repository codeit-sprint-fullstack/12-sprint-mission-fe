const BASE_URL = process.env.API_URL;

export async function getArticles({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
  const res = await fetch(`${BASE_URL}/articles?${params}`);
  if (!res.ok) {
    throw new Error("게시글 데이터를 가져오는 데 실패했습니다.");
  }
  return res.json();
}
