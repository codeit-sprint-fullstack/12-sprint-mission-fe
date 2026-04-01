const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

export async function getArticleList(page, pageSize, keyword) {
  const res = await fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  );
  const articles = await res.json();
  return articles;
}

export async function getArticle(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  const article = await res.json();
  return article;
}

export async function createArticle(article) {
  try {
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "테스트 제목",
        content: "테스트 상품 내용",
        image: "https://example.com/img.jpg",
      }),
    });
  } catch {
    console.log("에러입니다!");
  }
}

export async function patchArticle(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "테스트 제목 patch",
        content: "테스트 상품 내용 patch",
        image: "https://example.com/img.jpg",
      }),
    });
  } catch {
    console.log("에러입니다!");
  }
}

export async function deleteArticle(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch {
    console.log("에러입니다!");
  }
}
