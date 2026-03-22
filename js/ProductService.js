const BASE_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList(page = 1, pagesize = 10, keyword = "") {
  const url = `${BASE_URL}/products?page=${page}&pageSize=${pagesize}&keyword=${keyword}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("오류");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류");
  }
}

export async function getProduct(productId) {
  const url = `${BASE_URL}/products/${productId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("오류");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류");
  }
}

export async function createProduct(name, description, price, tags, images) {
  const url = `${BASE_URL}/products`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });

    if (!response.ok) {
      throw new Error("오류");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류");
  }
}

export async function patchProduct(
  productId,
  name,
  description,
  price,
  tags,
  images,
) {
  const url = `${BASE_URL}/products/${productId}`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price,
        tags,
        images,
      }),
    });
    if (!response.ok) {
      throw new Error("오류");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("오류");
  }
}

export async function deleteProduct(productId) {
  const url = `${BASE_URL}/products/${productId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("오류");
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error("오류");
  }
}
