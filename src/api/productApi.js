const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 조회
export const getProducts = async (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
) => {
  try {
    const params = {
      page,
      pageSize,
      orderBy,
    };

    if (keyword) {
      params.keyword = keyword;
    }

    const query = new URLSearchParams(params);

    const res = await fetch(`${BASE_URL}/products?${query}`);
    if (!res.ok) {
      throw new Error(`API 요청실패: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 하나만 조회 (상세)
export const getProduct = async (id) => {
  try {
    if (!id) {
      throw new Error("id가 필요합니다");
    }

    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      throw new Error(`상품 조회 실패: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 생성
export const createProduct = async ({
  name,
  description,
  price,
  tags,
  image,
}) => {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, images: [image] }),
    });
    if (!res.ok) {
      throw new Error(`상품 생성 실패: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품수정
export const updateProduct = async ({
  id,
  name,
  description,
  price,
  tags,
  image,
}) => {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(price !== undefined && { price }),
        ...(tags !== undefined && { tags }),
        ...(image !== undefined && { images: [image] }),
      ),
    });
    if (!res.ok) {
      throw new Error(`상품 수정 실패: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 삭제
export const deleteProduct = async (id) => {
  if (!id) {
    throw new Error("id가 필요합니다.");
  }
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`상품 삭제 실패: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 좋아요
export const favoriteProduct = async (id) => {
  if (!id) {
    throw new Error("좋아요를 위해서는 id가 필요합니다");
  }

  try {
    const res = await fetch(`${BASE_URL}/products/${id}/favorite`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`좋아요 실패: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 상품 좋아요 취소
export const unfavoriteProduct = async (id) => {
  if (!id) {
    throw new Error("좋아요 취소를 위해서는 id가 필요합니다");
  }
  try {
    const res = await fetch(`${BASE_URL}/products/${id}/favorite`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`좋아요 취소 실패: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
