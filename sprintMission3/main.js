/*[ ] import를 활용해 주세요.
[ ] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.*/
import {
  getProduct,
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

import {
  getArticle,
  getArticleList,
  createArticle,
  deleteArticle,
  patchArticle,
} from "./ArticleService.js";

//ProductTest
const products = await getProductList(1, 10, ""); //상품 목록 조회
console.log("getProductList test =>", products);

const createproduct = await createProduct(); //생성
console.log("createProduct test =>", createproduct);

const getproduct = await getProduct(createproduct.id); //특정 상품 상세 조회
console.log("getProduct test =>", getproduct);

const updateProduct = await patchProduct(createproduct.id); //수정
console.log("patchProduct test =>", updateProduct);

const deleteproduct = await deleteProduct(createproduct.id); //삭제
console.log("deleteProduct test =>", deleteproduct);

//ArticleTest
const article = await getArticleList(1, 10, ""); //게시글 목록 조회
console.log("getArticleList test =>", article);

const createarticle = await createArticle(); //생성
console.log("createArticle test =>", createarticle);

const getarticle = await getArticle(createproduct.id); //특정 상품 상세 조회
console.log("getArticle test =>", getarticle);

const updatearticle = await patchArticle(createproduct.id); //수정
console.log("patchArticle test =>", updatearticle);

const deletearticle = await deleteArticle(createproduct.id); //삭제
console.log("deleteArticle test =>", deletearticle);
