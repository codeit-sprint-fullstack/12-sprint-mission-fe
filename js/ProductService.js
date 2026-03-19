import { BASE_URL } from "./main";

export const getProductList = async (page, pageSize, keyword) => {
  try {
    const res = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (name, description, price, tags, images) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const patchProduct = async (id, data) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
