const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiClient(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  const headers = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };
  try {
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || errorData.error || `서버 에러: ${response.status}`,
      );
    }

    if (response.status === 204) return true;

    return await response.json();
  } catch (error) {
    console.error(
      `API 요청 실패 (${options.method || "GET"} ${endpoint}):`,
      error.message,
    );
    throw error;
  }
}

// 상품 관련 함수

export async function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
) {
  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    keyword,
    orderBy,
  });

  return apiClient(`/products?${query.toString()}`);
}

export async function getProductById(id) {
  return apiClient(`/products/${id}`);
}

export async function createProduct(productData) {
  return apiClient("/products", {
    method: "POST",
    body: JSON.stringify(productData),
  });
}

export async function updateProduct(id, productData) {
  return apiClient(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(productData),
  });
}

export async function deleteProduct(id) {
  return apiClient(`/products/${id}`, {
    method: "DELETE",
  });
}
