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

(async () => {
  // ===== Article 테스트 =====
  const articleList = await getArticleList(1, 5, "");
  console.log("게시글 리스트:", articleList);

  const newArticle = await createArticle({
    title: "테스트 글",
    content: "내용입니다",
    image: "https://via.placeholder.com/150",
  });
  console.log("게시글 생성:", newArticle);

  const articleDetail = await getArticle(newArticle.id);
  console.log("게시글 상세:", articleDetail);

  const updatedArticle = await patchArticle(newArticle.id, {
    title: "수정된 제목",
  });
  console.log("게시글 수정:", updatedArticle);

  const deletedArticle = await deleteArticle(newArticle.id);
  console.log("게시글 삭제:", deletedArticle);

  // ===== Product 테스트 =====
  const productList = await getProductList(1, 5, "");
  console.log("상품 리스트:", productList);

  const newProduct = await createProduct({
    name: "테스트 상품",
    description: "설명입니다",
    price: 10000,
    tags: ["test"],
    images: ["https://via.placeholder.com/150"],
  });
  console.log("상품 생성:", newProduct);

  const productDetail = await getProduct(newProduct.id);
  console.log("상품 상세:", productDetail);

  const updatedProduct = await patchProduct(newProduct.id, { price: 20000 });
  console.log("상품 수정:", updatedProduct);

  const deletedProduct = await deleteProduct(newProduct.id);
  console.log("상품 삭제:", deletedProduct);
})();
