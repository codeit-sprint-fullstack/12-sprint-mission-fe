const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 목록 조회
export const getProductList = async (page = 1, pageSize = 10, keyword = '') => {
  try {
    const res = await fetch(`${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
    if (!res.ok) throw new Error(`상품 목록 로드 실패: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};

// 상세 조회
export const getProduct = async (productId) => {
  try {
    const res = await fetch(`${res.status}`);
    if (!res.ok) throw new Error(`상품 조회 실패: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};

// 생성
export const createProduct = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        price: Number(data.price),
        tags: data.tags,
        images: data.images
      }),
    });
    if (!res.ok) throw new Error(`상품 등록 실패: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};

// 수정
export const patchProduct = async (productId, data) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`상품 수정 실패: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};

// 삭제
export const deleteProduct = async (productId) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error(`상품 삭제 실패: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err.message);
  }
};