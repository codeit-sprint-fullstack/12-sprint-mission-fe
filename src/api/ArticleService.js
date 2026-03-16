// src/api/ArticleService.js
const BASE_URL = 'https://panda-market-api-crud.vercel.app/articles';

/**
 * 1. 게시글 목록 조회 (GET /articles)
 * 파라미터: page, pageSize, orderBy(recent/like), keyword
 */
export const getArticleList = (page = 1, pageSize = 10, orderBy = 'recent', keyword = '') => {
  const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
  
  return fetch(`${BASE_URL}?${params.toString()}`)
    .then((response) => {
      if (!response.ok) throw new Error(`게시글 목록 조회 실패: ${response.status}`);
      return response.json();
    })
    .catch((error) => console.error(error.message)); 
};

/**
 * 2. 게시글 생성 (POST /articles)
 * Request body: image, content, title
 */
export const createArticle = (articleData) => {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(`게시글 생성 실패: ${response.status}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};

/**
 * 3. 게시글 상세 조회 (GET /articles/{articleId})
 */
export const getArticle = (articleId) => {
  return fetch(`${BASE_URL}/${articleId}`)
    .then((response) => {
      if (!response.ok) throw new Error(`게시글 상세 조회 실패: ${response.status}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};

/**
 * 4. 게시글 수정 (PATCH /articles/{articleId})
 */
export const patchArticle = (articleId, updateData) => {
  return fetch(`${BASE_URL}/${articleId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  })
    .then((response) => {
      if (!response.ok) throw new Error(`게시글 수정 실패: ${response.status}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};

/**
 * 5. 게시글 삭제 (DELETE /articles/{articleId})
 */
export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}/${articleId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) throw new Error(`게시글 삭제 실패: ${response.status}`);
      return response.json();
    })
    .catch((error) => console.error(error.message));
};