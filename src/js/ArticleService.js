const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 목록 조회
export const getArticleList = (page = 1, pageSize = 10, keyword = '') => {
  return fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then(res => {
      if (!res.ok) throw new Error(`게시글 목록 로드 실패 (상태 코드: ${res.status})`);
      return res.json();
    })
    .catch(err => console.error(err.message));
};

// 상세 조회
export const getArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then(res => {
      if (!res.ok) throw new Error(`게시글 조회 실패 (ID: ${articleId})`);
      return res.json();
    })
    .catch(err => console.error(err.message));
};

// 생성
export const createArticle = (data) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: data.title,
      content: data.content,
      image: data.image
    }),
  })
    .then(res => {
      if (!res.ok) throw new Error(`게시글 생성 실패: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
};

// 수정
export const patchArticle = (articleId, data) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => {
      if (!res.ok) throw new Error(`게시글 수정 실패: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
};

// 삭제
export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (!res.ok) throw new Error(`게시글 삭제 실패: ${res.status}`);
      return res.json();
    })
    .catch(err => console.error(err.message));
};