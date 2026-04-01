const PRODUCTS = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList(page, pageSize, keyword) {
  try {
    const res = await fetch(
      `${PRODUCTS}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getProduct(productId) {
  try {
    const res = await fetch(`${PRODUCTS}/${productId}`);
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function createProduct(name, description, price, tags, images) {
  try {
    const res = await fetch(PRODUCTS, {
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
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
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
  try {
    const res = await fetch(`${PRODUCTS}/${productId}`, {
      method: "PATCH",
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
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function deleteProduct(productId) {
  try {
    const res = await fetch(`${PRODUCTS}/${productId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res;
  } catch (err) {
    throw err;
  }
}
