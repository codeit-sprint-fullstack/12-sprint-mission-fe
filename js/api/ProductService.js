//======products========
const BASE_URL_PRODUCTS = "http://localhost:4000/products";
export const getProductList = async (page, pageSize, keyword) => {
  try {
    const response = await fetch(
      `${BASE_URL_PRODUCTS}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log(`GET: productList =>`, result);
    return result;
  } catch (e) {
    alert(e);
  }
};
export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`);
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log(`GET: products =>`, result);
    return result;
  } catch (e) {
    alert(e);
  }
};
export const createProduct = async (name, description, price, tags, images) => {
  const requestBody = {
    name,
    description,
    price,
    tags,
    images,
  };
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log(`POST: products =>`, result);
    return result;
  } catch (e) {
    alert(e);
  }
};
export const patchProduct = async (modifiedProduct, id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedProduct),
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log("PATCH: product =>", result);
    return result;
  } catch (e) {
    alert(e);
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`에러 발생: ${response.status}`);
    const result = await response.json();
    console.log("DELETE: product =>", result);
    return result;
  } catch (e) {
    alert(e);
  }
};
