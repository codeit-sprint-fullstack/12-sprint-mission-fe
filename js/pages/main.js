import {
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
} from "../services/ArticleService.js";

import {
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
} from "../services/ProductService.js";

// ==================== Article CRUD 테스트 ====================
createArticle(
  "테스트 게시글",
  "테스트 내용입니다.",
  "https://picsum.photos/200",
)
  .then((createdArticle) => {
    console.log("게시글 생성:", createdArticle);

    return getArticleList();
  })
  .then((articleList) => {
    console.log("게시글 목록:", articleList);

    const articleId = articleList.list[0].id;

    return patchArticle(
      articleId,
      "수정된 게시글 제목",
      "수정된 게시글 내용",
      "https://picsum.photos/200",
    );
  })
  .then((updatedArticle) => {
    console.log("게시글 수정:", updatedArticle);

    return deleteArticle(updatedArticle.id);
  })
  .then((deletedArticle) => {
    console.log("게시글 삭제:", deletedArticle);
  })
  .catch((error) => {
    console.error("Article error:", error);
  });

// ==================== Product CRUD 테스트 ====================
async function productTest() {
  try {
    const createdProduct = await createProduct(
      "테스트 상품",
      "상품 설명입니다.",
      10000,
      ["전자제품"],
      ["https://picsum.photos/200"],
    );
    console.log("상품 생성:", createdProduct);

    const productList = await getProductList();
    console.log("상품 목록:", productList);

    const productId = productList.list[0].id;

    const updatedProduct = await patchProduct(
      productId,
      "수정된 상품명",
      "수정된 상품 설명",
      20000,
      ["가전"],
      ["https://picsum.photos/200"],
    );
    console.log("상품 수정:", updatedProduct);

    const deletedProduct = await deleteProduct(updatedProduct.id);
    console.log("상품 삭제:", deletedProduct);
  } catch (error) {
    console.error("Product error:", error);
  }
}

productTest();
