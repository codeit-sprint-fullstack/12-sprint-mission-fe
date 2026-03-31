import { productApi } from "./api.js";

// 상품 목록 조회
export async function getProductList({
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent", // recent 또는 favorite
}) {
  try {
    const response = await productApi.get("/products", {
      params: { page, pageSize, keyword, orderBy },
    });
    return response.data;
  } catch (error) {
    console.error(
      "getProductList error:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

// 상품 상세 조회
export async function getProduct(productId) {
  try {
    const response = await productApi.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("getProduct error:", error.response?.data || error.message);
    throw error;
  }
}

// 상품 생성
export async function createProduct({
  name,
  description,
  price,
  tags,
  images,
}) {
  try {
    const response = await productApi.post("/products", {
      name,
      description,
      price,
      tags,
      images,
    });
    return response.data;
  } catch (error) {
    console.error(
      "createProduct error:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

// 상품 수정
export async function patchProduct(
  productId,
  { name, description, price, tags, images },
) {
  try {
    const response = await productApi.patch(`/products/${productId}`, {
      name,
      description,
      price,
      tags,
      images,
    });
    return response.data;
  } catch (error) {
    console.error("patchProduct error:", error.response?.data || error.message);
    throw error;
  }
}

// 상품 삭제
export async function deleteProduct(productId) {
  try {
    const response = await productApi.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(
      "deleteProduct error:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

// 상품 좋아요
export async function favoriteProduct(productId) {
  try {
    const response = await productApi.post(`/products/${productId}/favorite`);
    return response.data;
  } catch (error) {
    console.error(
      "favoriteProduct error:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

// 상품 좋아요 취소
export async function unfavoriteProduct(productId) {
  try {
    const response = await productApi.delete(`/products/${productId}/favorite`);
    return response.data;
  } catch (error) {
    console.error(
      "unfavoriteProduct error:",
      error.response?.data || error.message,
    );
    throw error;
  }
}
