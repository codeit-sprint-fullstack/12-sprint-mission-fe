import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./productService.js";
import {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./articleService.js";

async function init() {
  const products = await getProductList(1, 10, "테스트");
  const product = await getProduct(2988);

  console.log("getProductList => ", products);
  console.log("getProduct => ", product);

  const articles = await getArticleList(1, 10, "테스트");
  const article = await getArticle(5550);

  console.log("getArticleList => ", articles);
  console.log("getArticle => ", article);
}

// api 연결 임시 확인용
init();
