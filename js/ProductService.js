const PRODUCT_BASE_URL = "https://panda-market-api-crud.vercel.app/products";

export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${PRODUCT_BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!response.ok) {
      console.log(`상품 목록 조회 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getProductList 오류:", error);
  }
}

export async function getProduct(productId) {
  try {
    const response = await fetch(`${PRODUCT_BASE_URL}/${productId}`);

    if (!response.ok) {
      console.log(`상품 상세 조회 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getProduct 오류:", error);
  }
}

export async function createProduct(name, description, price, tags, images) {
  const newProduct = {
    name,
    description,
    price,
    tags,
    images,
  };

  try {
    const response = await fetch(PRODUCT_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      console.log(`상품 생성 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("createProduct 오류:", error);
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
  const updateProduct = {
    name,
    description,
    price,
    tags,
    images,
  };

  try {
    const response = await fetch(`${PRODUCT_BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });

    if (!response.ok) {
      console.log(`상품 수정 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("patchProduct 오류:", error);
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${PRODUCT_BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.log(`상품 삭제 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("deleteProduct 오류:", error);
  }
}
