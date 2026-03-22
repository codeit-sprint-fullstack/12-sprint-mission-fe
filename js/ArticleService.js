const ARTICLE_BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

export async function getArticleList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${ARTICLE_BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!response.ok) {
      console.log(`게시글 목록 조회 실패: ${response.status}`);
      return;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("getArticleList 오류:", error);
  }
}

export async function getArticle(articleId) {
  try {
    const response = await fetch(`${ARTICLE_BASE_URL}/${articleId}`);

    if (!response.ok) {
      console.log(`게시글 상세 조회 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getArticle 오류:", error);
  }
}

export async function createArticle(title, content, image) {
  const newArticle = {
    title,
    content,
    image,
  };

  try {
    const response = await fetch(ARTICLE_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    });

    if (!response.ok) {
      console.log(`게시글 생성 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("createArticle 오류:", error);
  }
}

export async function patchArticle(articleId, title, content, image) {
  const updateArticle = {
    title,
    content,
    image,
  };

  try {
    const response = await fetch(`${ARTICLE_BASE_URL}/${articleId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateArticle),
    });

    if (!response.ok) {
      console.log(`게시글 수정 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("patchArticle 오류:", error);
  }
}

export async function deleteArticle(articleId) {
  try {
    const response = await fetch(`${ARTICLE_BASE_URL}/${articleId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.log(`게시글 삭제 실패: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("deleteArticle 오류:", error);
  }
}
