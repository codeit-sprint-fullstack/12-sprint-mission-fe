const API_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList(
  page = 1, // 불러올 페이지 default 1
  pageSize = 10, // 불러올 상품 수 default 10
  orderBy = "recent", // 불러올 정렬방식 default recent (최신순)
  keyword = "", // 검색 키워드 default ''
) {
  try {
    const res = await fetch(
      `${API_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${keyword ? "&keyword=" + keyword : ""}`,
    );
    if (!res.ok) {
      console.error(`에러발생: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }
    const products = await res.json();

    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getProduct(pid) {
  try {
    const res = await fetch(`${API_URL}/products/${pid}`);
    if (!res.ok) {
      console.error(`에러발생: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }
    const product = await res.json();

    return product;
  } catch (error) {
    console.error(error);
  }
}

export async function createProduct(product) {
  try {
    const { name, description, price, tags, images } = product;

    const res = await fetch(`${API_URL}/products`, {
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
      console.error(`에러발생: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }
    const createdProduct = await res.json();

    return createdProduct;
  } catch (error) {
    console.error(error);
  }
}

export async function patchProduct(pid, data) {
  try {
    const res = await fetch(`${API_URL}/products/${pid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      console.error(`에러발생: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }
    const patchedProduct = await res.json();

    return patchedProduct;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(pid) {
  try {
    const res = await fetch(`${API_URL}/products/${pid}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error(`에러발생: ${res.status} ${res.statusText}`);
      throw new Error(`${res.status}`);
    }
    const deletedProduct = await res.json();

    return deletedProduct;
  } catch (error) {
    console.error(error);
  }
}
