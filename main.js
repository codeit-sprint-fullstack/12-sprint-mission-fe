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

getArticleList();
getArticle();
createArticle();
patchArticle();
deleteArticle();

getProductList();
getProduct();
createProduct();
patchProduct();
deleteProduct();
