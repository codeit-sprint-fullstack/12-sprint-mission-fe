import { productApi } from "./api";

export async function getProductList({
  offset = 0,
  limit = 10,
  keyword = "",
  orderBy = "recent",
}) {
  try {
    const response = await productApi.get("/products", {
      params: { offset, limit, keyword, orderBy },
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

export async function getProduct(productId) {
  try {
    const response = await productApi.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("getProduct error:", error.response?.data || error.message);
    throw error;
  }
}

export async function createProduct({ name, description, price, tags }) {
  try {
    const response = await productApi.post("/products", {
      name,
      description,
      price,
      tags,
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

export async function patchProduct(
  productId,
  { name, description, price, tags },
) {
  try {
    const response = await productApi.patch(`/products/${productId}`, {
      name,
      description,
      price,
      tags,
    });

    return response.data;
  } catch (error) {
    console.error("patchProduct error:", error.response?.data || error.message);
    throw error;
  }
}

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
