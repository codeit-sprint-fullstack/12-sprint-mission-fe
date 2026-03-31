import { API_ENDPOINTS } from "../config/index.js";
import { request } from "./request.js";

const BASE_URL = API_ENDPOINTS.products;

/**
 * 1. 상품 목록 조회 (GET)
 */
export const getProductList = async (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
) => {
  const params = new URLSearchParams({ page, pageSize, orderBy });
  if (keyword) params.append("keyword", keyword);
  return request(`${BASE_URL}?${params.toString()}`);
};

/**
 * 2. 상품 생성 (POST)
 */
export const createProduct = async (productData) => {
  return request(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
};

/**
 * 3. 상품 상세 조회 (GET)
 */
export const getProduct = async (productId) => {
  if (!productId) {
    throw new Error("productId is required");
  }
  return request(`${BASE_URL}/${productId}`);
};

/**
 * 4. 상품 수정 (PATCH)
 */
export const patchProduct = async (productId, updateData) => {
  return request(`${BASE_URL}/${productId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });
};

/**
 * 5. 상품 삭제 (DELETE)
 */
export const deleteProduct = async (productId) => {
  return request(`${BASE_URL}/${productId}`, {
    method: "DELETE",
  });
};
