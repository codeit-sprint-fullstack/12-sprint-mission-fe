const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList(page, pageSize, keyword) {
  const res = await fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  );
  const products = await res.json();
  return products;
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  const product = await res.json();
  return product;
}

export async function createProduct(product) {
  try {
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "타이틀",
        description: "상품 내용",
        images: ["https://example.com/img.jpg"],
        price: 1000,
        tags: ["태그1"],
      }),
    });
  } catch {
    console.log("에러입니다!");
  }
}

export async function patchProduct(product, id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "타이틀 patch",
        description: "상품 내용 patch",
        images: ["https://example.com/img.jpg"],
        price: 1000,
        tags: ["태그1 patch"],
      }),
    });
  } catch {
    console.log("에러입니다!");
  }
}

export async function deleteProduct(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch {
    console.log("에러입니다!");
  }
}
