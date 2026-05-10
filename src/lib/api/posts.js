const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getArticles({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });

  const res = await fetch(`${BASE_URL}/articles?${params}`);

  if (!res.ok) {
    throw new Error("게시글 데이터를 가져오는 데 실패했습니다.");
  }

  return res.json();
}

export async function getArticle(id) {
  const res = await fetch(`${BASE_URL}/articles/${id}`);

  if (!res.ok) {
    const err = new Error("개별 게시글을 가져오는 데 실패했습니다.");
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export async function createArticle({ title, content }) {
  const res = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  if (!res.ok) {
    throw new Error("게시글 등록에 실패했습니다.");
  }

  return res.json();
}

export async function updateArticle(id, fields) {
  const res = await fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    throw new Error("게시글 수정에 실패했습니다.");
  }

  return res.json();
}

export async function deleteArticle(id) {
  const res = await fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("게시글 삭제에 실패했습니다.");
  }

  return;
}

export async function getArticleComments({ articleId, cursor, take = 10 }) {
  const params = new URLSearchParams();

  if (cursor) params.append("cursor", cursor);
  params.append("take", take);

  const res = await fetch(
    `${BASE_URL}/articles/${articleId}/comments?${params}`,
  );

  if (!res.ok) {
    throw new Error("댓글 데이터를 가져오는 데 실패했습니다.");
  }

  return res.json();
}

export async function createArticleComment(articleId, content) {
  const res = await fetch(`${BASE_URL}/articles/${articleId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!res.ok) {
    throw new Error("게시물 댓글 등록에 실패했습니다.");
  }

  return res.json();
}
