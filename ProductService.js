const BASE_URL = "https://panda-market-api-crud.vercel.app";

export const getProductList = async (page, pageSize, keyword) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!response.ok) {
      console.log("에러!");
      throw new Error(`서버 오류: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      console.log("에러!");
      throw new Error(`서버 오류: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (name, description, price, tags, images) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
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
      console.log("에러!");
      throw new Error(`서버 오류: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const patchProduct = async (id, updateData) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) {
      console.log("에러!");
      throw new Error(`서버 오류: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.log("에러!");
      throw new Error(`서버 오류: ${response.status}`);
    }
    return;
  } catch (error) {
    console.log(error);
  }
};
