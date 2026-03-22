import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

getArticleList(1, 5).then(function (data) {
  console.log("연결 성공");
  console.log(data);
});

getArticle(1).then(function (data) {
  console.log("결과");
  console.log(data);
});

createArticle("제목", "내용", "https://picsum.photos/200").then(
  function (result) {
    console.log("결과");
    console.log(result);
  },
);

patchArticle(
  123,
  "수정된 제목",
  "수정된 내용",
  "https://picsum.photos/200",
).then(function (result) {
  console.log("결과");
  console.log(result);
});

const targetId = 123;

deleteArticle(targetId)
  .then(function (result) {
    console.log(targetId + "결과:", result);
    return getArticle(targetId);
  })
  .then(function (data) {
    console.log("결과:", data);
  });

getProductList(1, 5).then(function (data) {
  console.log("목록:", data);
});

createProduct(
  "테스트 상품",
  "설명입니다",
  10000,
  ["태그"],
  ["https://picsum.photos/200"],
).then(function (newProduct) {
  const myId = newProduct.id;
  console.log("등록 성공 ID:", myId);

  patchProduct(
    myId,
    "수정 상품",
    "수정 설명",
    20000,
    ["수정태그"],
    ["https://picsum.photos/200"],
  )
    .then(function (updated) {
      console.log("수정 성공:", updated);
      return deleteProduct(myId);
    })
    .then(function (res) {
      console.log("삭제 성공:", res);
    });
});
