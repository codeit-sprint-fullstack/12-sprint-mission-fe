import BASE_URL from "./config.js";

export const getArticleList = async (page, pageSize, keyword) => {
  try {
    const res = await fetch(
      `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    console.log(res);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getArticle = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const createArticle = async (title, content, image) => {
  try {
    const res = await fetch(`${BASE_URL}/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, image }),
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const patchArticle = async (id, data) => {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteArticle = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
