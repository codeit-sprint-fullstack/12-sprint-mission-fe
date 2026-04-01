import * as article from "./article-service.js";
import * as product from "./product-service.js";

export const BASE_URL = "https://panda-market-api-crud.vercel.app";

// -------------------------------------------
//             테스트용 실행함수
// -------------------------------------------
function articleTest() {
  article.getArticelList(1, 5);
  article.getArticelList(1, 5, "테스트");
  article.getArticle(5550);
  article.createArticle(
    "iRum 테스트 게시글",
    "iRum님의 테스트 게시글입니다!",
    "https://picsum.photos/200",
  );
  article.patchArticle(
    5561,
    "iRum 테스트 게시글 수정본",
    "iRum님의 테스트 게시글을 수정했습니다!",
    "https://picsum.photos/300",
  );
  article.deleteArticle(5750);
}
articleTest();

function productTest() {
  product.getProductList(1, 5);
  product.getProductList(1, 5, "테스트");
  product.getProduct(3061);
  product.createProduct(
    "iRum 테스트 상품",
    "iRum님의 테스트 상품입니다!",
    12000,
    ["테스트", "접시"],
    "https://picsum.photos/200",
  );
  product.patchProduct(
    3066,
    "iRum 테스트 상품 수정",
    "iRum님의 테스트 상품을 수정했습니다!",
    18000,
    ["테스트", "접시", "수정본"],
    "https://picsum.photos/200",
  );
  product.deleteProduct(3064);
}
// productTest();
