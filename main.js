import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from "./ArticleService.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from "./ProductService.js";

//test 실행

getArticleList(1, 10, "").then((data) => console.log("글목록", data)); //게시글 목록 불러오기

getArticle(5588).then((data) => console.log("글하나", data)); //특정 게시글 불러오기

createArticle("게시글 제목", "내용", "https://이미지url.com/1.jpg").then(
  (data) => console.log("생성글", data),
); //게시글 생성

patchArticle(5588, { title: "바뀐 제목", content: "바뀐내용" }).then((data) =>
  console.log("수정된 글", data),
); //게시글 수정

deleteArticle(2990).then(() => console.log("삭제됨")); //게시글 삭제

getProductList(1, 10, "").then((data) => console.log("상품목록", data)); //상품 목록 불러오기

getProduct(2998).then((data) => console.log("상품", data)); //특정 상품 불러오기

createProduct(
  "상품 이름",
  "string",
  0,
  ["전자제품"],
  ["https://example.com/..."],
).then((data) => console.log("생성상품", data)); //상품 생성

patchProduct(2993, { name: "바뀐 상품명", price: 5000 }).then((data) =>
  console.log("수정된 상품", data),
); //상품 수정

deleteProduct(2997).then(() => console.log("상품 삭제됨")); //상품 삭제
