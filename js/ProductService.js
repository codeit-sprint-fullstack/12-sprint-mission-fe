const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

export const getProductList = async ({ page, pageSize, keyword }) => {
  const query = `?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  try {
    const res = await fetch(BASE_URL + query);
    if (!res.ok) {
      // 강제로 에러를 발생시켜서 catch로 던지기
      throw new Error(`서버 에러! 상태 코드: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("상품 조회 중 에러 발생:", error.message);
    return null; // 에러 났을 때 안전하게 빈 값 돌려주기
  }
};

export const getProduct = async (productId) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`);
    if (!res.ok) {
      // 강제로 에러를 발생시켜서 catch로 던지기
      throw new Error(`서버 에러! 상태 코드: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("상품 조회 중 에러 발생:", error.message);
    return null; // 에러 났을 때 안전하게 빈 값 돌려주기
  }
};

export const createProduct = async ({
  name,
  description,
  price,
  tags,
  images,
}) => {
  try {
    const res = await fetch(BASE_URL, {
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
    if (!res.ok) {
      // 강제로 에러를 발생시켜서 catch로 던지기
      throw new Error(`서버 에러! 상태 코드: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("상품 추가 중 에러 발생:", error.message);
    return null; // 에러 났을 때 안전하게 빈 값 돌려주기
  }
};

export const patchProduct = async ({ productId, product }) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!res.ok) {
      // 강제로 에러를 발생시켜서 catch로 던지기
      throw new Error(`서버 에러! 상태 코드: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("상품 수정 중 에러 발생:", error.message);
    return null; // 에러 났을 때 안전하게 빈 값 돌려주기
  }
};

export const deleteProduct = async (productId) => {
  try {
    const res = await fetch(`${BASE_URL}/${productId}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      // 강제로 에러를 발생시켜서 catch로 던지기
      throw new Error(`서버 에러! 상태 코드: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("상품 삭제 중 에러 발생:", error.message);
    return null; // 에러 났을 때 안전하게 빈 값 돌려주기
  }
};
