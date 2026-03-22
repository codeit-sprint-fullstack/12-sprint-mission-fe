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

async function runTest() {
  const articleList = await getArticleList(1, 10, "");
  console.log("게시글 목록:", articleList);

  const createdArticle = await createArticle(
    "테스트 게시글 제목",
    "테스트 게시글 내용입니다.",
    "https://example.com/article-image.jpg",
  );
  console.log("생성된 게시글:", createdArticle);

  if (createdArticle) {
    const articleDetail = await getArticle(createdArticle.id);
    console.log("게시글 상세:", articleDetail);

    const updatedArticle = await patchArticle(
      createdArticle.id,
      "수정된 게시글 제목",
      "수정된 게시글 내용입니다.",
      "https://example.com/article-image-2.jpg",
    );
    console.log("수정된 게시글:", updatedArticle);

    const deletedArticle = await deleteArticle(createdArticle.id);
    console.log("삭제된 게시글:", deletedArticle);
  }

  const productList = await getProductList(1, 10, "");
  console.log("상품 목록:", productList);

  const createdProduct = await createProduct(
    "핸드폰",
    "최신 핸드폰",
    129000,
    ["전자제품", "핸드폰"],
    ["https://example.com/product-image.jpg"],
  );
  console.log("생성된 상품:", createdProduct);

  if (createdProduct) {
    const productDetail = await getProduct(createdProduct.id);
    console.log("상품 상세:", productDetail);

    const updatedProduct = await patchProduct(
      createdProduct.id,
      "수정된 핸드폰",
      "최신최신 핸드폰",
      139000,
      ["전자제품", "핸드폰", "블루투스"],
      ["https://example.com/product-image-2.jpg"],
    );
    console.log("수정된 상품:", updatedProduct);

    const deletedProduct = await deleteProduct(createdProduct.id);
    console.log("삭제된 상품:", deletedProduct);
  }
}

runTest();
