const BASE_URL = "https://panda-market-api.vercel.app/products";

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (!response.ok) throw new Error("상품 정보를 불러오지 못했습니다.");
  return response.json();
}

export async function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent"
) {
  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    keyword,
    orderBy,
  });

  const response = await fetch(`${BASE_URL}?${query.toString()}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("상품 목록을 불러오지 못했습니다.");
  return response.json();
}

export async function createProduct(data) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("상품 등록에 실패했습니다.");
  return response.json();
}

export async function patchProduct(id, updates) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  if (!response.ok) throw new Error("상품 수정에 실패했습니다.");
  return response.json();
}

export async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("상품 삭제에 실패했습니다.");
  return response.json();
}
