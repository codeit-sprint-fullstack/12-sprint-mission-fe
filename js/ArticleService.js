const BASE_URL = "https://panda-market-api-crud.vercel.app";

// 게시글 리스트 조회
export async function getArticleList(page = 1, pageSize = 10, keyword = "") {
  try {
    const res = await fetch(
      `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!res.ok) {
      console.error("에러 발생:", res.status);
    }

    return await res.json();
  } catch (err) {
    console.error("네트워크 에러:", err);
  }
}

// 게시글 상세 조회
export async function getArticle(id) {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`);

    if (!res.ok) {
      console.error("에러 발생:", res.status);
    }

    return await res.json();
  } catch (err) {
    console.error("네트워크 에러:", err);
  }
}

// 게시글 생성
export async function createArticle(data) {
  try {
    const res = await fetch(`${BASE_URL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content,
        image: data.image,
      }),
    });

    if (!res.ok) {
      console.error("에러 발생:", res.status);
    }

    return await res.json();
  } catch (err) {
    console.error("네트워크 에러:", err);
  }
}

// 게시글 수정
export async function patchArticle(id, data) {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error("에러 발생:", res.status);
    }

    return await res.json();
  } catch (err) {
    console.error("네트워크 에러:", err);
  }
}

// 게시글 삭제
export async function deleteArticle(id) {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error("에러 발생:", res.status);
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}
