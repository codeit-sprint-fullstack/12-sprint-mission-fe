const BASE_URL = "https://panda-market-api-crud.vercel.app/";

export async function getProductList(
  page = 1,
  pageSize = 10,
  orderby = "recent",
  keyword = "",
) {
  const res = new URLSearchParams();
  res.set("page", page);
  res.set("pageSize", pageSize);
  res.set("orderby", orderby);
  if (keyword.trim()) {
    res.set("keyword", keyword);
  }

  try {
    const data = await fetch(`${BASE_URL}/products?${res.toString()}`, {
      method: "GET",
    });
    return data;
  } catch (error) {
    console.error("product error", error);
    throw error;
  }
}

export async function createProduct(images, tags, price, description, name) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ images, tags, price, description, name }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("product error", error);
    throw error;
  }
}

export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("product error", error);
    throw error;
  }
}

export async function patchProduct(productId, data) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("product error", error);
    throw error;
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("product error", error);
    throw error;
  }
}
