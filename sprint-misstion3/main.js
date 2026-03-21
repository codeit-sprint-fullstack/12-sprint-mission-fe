import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from "./ProductService.js";

///////////////////////////////////////////////////
//////////////ProductService 테스트////////////////
//////////////////////////////////////////////////

// 목록 불러오기

// getProductList(1, 10, "테스트 상품")
//   .then((productList) => console.log(productList))
//   .catch((error) => console.error(error));

// id선택해서 불러오기

// getProduct(2212)
//   .then((product) => console.log(product))
//   .catch((error) => console.log(error));

// 입력 테스트

// createProduct(
//   "아보카도 우유",
//   "string",
//   0,
//   ["음식"],
//   ["https://www.greenart.co.kr/upimage/new_editor/20212/20210201112353.jpg"]
// )
//   .then((product) => {
//     console.log("생성 성공", product);
//   })
//   .catch((error) => {
//     console.error("생성 실패", error);
//   });

// 수정테스트

patchProduct({
  productId: 2976,
  inputs: {
    name: "우유",
    price: 2500,
  },
})
  .then((product) => {
    console.log("수정 성공", product);
  })
  .catch((error) => {
    console.error("수정 실패", error);
  });

getProduct(2976)
  .then((product) => console.log(product))
  .catch((error) => console.log(error));

// 삭제 테스트

// deleteProduct(2976)
//   .then((product) => console.log(product))
//   .catch((error) => console.log(error));

///////////////////////////////////////////////////
////////////ArticleService.js 테스트///////////////
//////////////////////////////////////////////////

// 리스트 불러오기 테스트

// getArticleList(1, 10, "테스트")
//   .then((article) => console.log(article))
//   .catch((error) => console.log(error));

// id로 찾기 테스트

// getArticle(4121)
//   .then((article) => console.log(article))
//   .catch((error) => console.log(error));

// 게시글 생성 테스트

// createArticle(
//   "게시글 제목 /심현수",
//   "심현수 게시글입니다.",
//   "https://miro.medium.com/1*ZYyXvhYDGvELzYoXYpPLMg.png"
// )
//   .then((product) => {
//     console.log("생성 성공", product);
//   })
//   .catch((error) => {
//     console.error("생성 실패", error);
//   });

// getArticle(5564)
//   .then((article) => console.log(article))
//   .catch((error) => console.log(error));

// 글 수정 테스트
// patchArticle({
//   articleId: 5564,
//   inputs: {
//     content: "I stolen your code",
//   },
// })
//   .then((product) => {
//     console.log("수정 성공", product);
//   })
//   .catch((error) => {
//     console.error("수정 실패", error);
//   });

// getArticle(5564)
//   .then((article) => console.log(article))
//   .catch((error) => console.log(error));

// deleteArticle(5564)
//   .then((product) => console.log(product))
//   .catch((error) => console.log(error));
