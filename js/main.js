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

getArticleList();

getArticle(5642);

// createArticle("양념치킨", "bhc꺼 먹고싶다.", "https://이미지url.com/1.jpg");

// patchArticle(5642, "양념치킨", "bhc 먹고싶다.", "https://이미지url.com/1.jpg");

// deleteArticle(5641);

getProductList();

getProduct(3035);

//createProduct 임시 데이터
// let name = "이어폰";
// let description = "버즈3 fe";
// let price = 120000;
// let tags = ["전자제품"];
// let images = ["https://example.com/..."];

// createProduct(name, description, price, tags, images);

//patchProduct 임시 데이터
// let id = 3291;
// let name = "이어폰";
// let description = "버즈+ fe";
// let price = 120000;
// let tags = ["전자제품"];
// let images = ["https://example.com/..."];
// patchProduct(id, name, description, price, tags, images);

// deleteProduct(3291);
