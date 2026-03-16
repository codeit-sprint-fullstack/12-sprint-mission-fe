const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

/**
 * 1. 상품 목록 조회 (GET)
 */
export const getProductList = async (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
) => {
  try {
    const params = new URLSearchParams({
      page,
      pageSize,
      orderBy,
      keyword,
    });

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    if (!response.ok) throw new Error(`상품 목록 조회 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * 2. 상품 생성 (POST)
 */
export const createProduct = async (productData) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (!response.ok) throw new Error(`상품 생성 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * 3. 상품 상세 조회 (GET)      
 */
export const getProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`);

    if (!response.ok) throw new Error(`상세 조회 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * 4. 상품 수정 (PATCH)
 */
export const patchProduct = async (productId, updateData) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) throw new Error(`상품 수정 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * 5. 상품 삭제 (DELETE)
 */
export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(`상품 삭제 실패: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};
