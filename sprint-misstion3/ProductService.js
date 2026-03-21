const API_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList(page, pageSize, keyword = "") {
  try {
    const query = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
      keyword,
    });

    const response = await fetch(`${API_URL}/products?${query.toString()}`);

    if (!response.ok) {
      console.error(`getProductList 에러: ${response.status}`);
      throw new Error(`error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("getProductList 요청 실패:", error);
    throw error;
  }
}

export async function getProduct(productId) {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`);

    if (!response.ok) {
      console.error(`getProduct 에러: ${response.status}`);
      throw new Error(`error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("getProduct 요청 실패:", error);
    throw error;
  }
}

export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    if (!response.ok) {
      console.error(`createProduct 에러: ${response.status}`);
      throw new Error(`error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("createProduct 요청 실패:", error);
    throw error;
  }
}

export async function patchProduct(productData) {
  try {
    const { productId, inputs } = productData;

    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    if (!response.ok) {
      console.error(`patchProduct 에러: ${response.status}`);
      throw new Error(`error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("patchProduct 요청 실패:", error);
    throw error;
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(`deleteProduct 에러: ${response.status}`);
      throw new Error(`error: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("deleteProduct 요청 실패:", error);
    throw error;
  }
}
