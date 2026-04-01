import { BASE_URL } from "./main.js";

// -------------------------------------------
//             상품 목록 CRUD
// -------------------------------------------
// 1. 상품 목록 조회하기
export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!response.ok) {
      throw new Error("데이터 로드 실패");
    }

    const productList = await response.json();
    console.log("1. 상품 목록 조회 => ", productList);
  } catch (error) {
    console.error("로드 에러: ", error);
  }
}

// 2. 상품 상세 조회하기
export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("데이터 로드 실패");
    }

    const product = await response.json();
    console.log("2. 상품 상세 조회 => ", product);
  } catch (error) {
    console.error("로드 에러: ", error);
  }
}

// 3. 상품 작성하기
export async function createProduct(name, description, price, tags, images) {
  const newProduct = {
    name,
    description,
    price,
    tags,
    images,
  };

  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("상품 생성 실패");
    }

    const createdProduct = await response.json();
    console.log("3. 상품 작성 => ", createdProduct);
  } catch (error) {
    console.error("생성 에러:", error);
  }
}

// 4. 상품 수정하기
export async function patchProduct(id, name, description, price, tags, images) {
  const updatedProduct = {
    name,
    description,
    price,
    tags,
    images,
  };
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error("상품 수정 실패");
    }

    const patchedProduct = await response.json();
    console.log("4. 상품 수정 => ", patchedProduct);
  } catch (error) {
    console.error("수정 에러:", error);
  }
}

// 5. 상품 삭제하기
export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("상품 삭제 실패");
    }

    const deletedProduct = await response.json();
    console.log("5. 상품 삭제 => ", deletedProduct);
  } catch (error) {
    console.error("삭제 에러:", error);
  }
}
