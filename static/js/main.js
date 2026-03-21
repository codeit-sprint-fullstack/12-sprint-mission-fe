import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleList,
  patchArticle,
} from "./api/ArticleService.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductList,
  patchProduct,
} from "./api/ProductService.js";

async function init() {
  // --- Product 테스트 ---
  const products = await getProductList();
  console.log("getProductList => ", products);

  const product = await getProduct(products.list[0].id);
  console.log("getProduct => ", product);

  const created = await createProduct({
    name: "테스트 상품",
    description: "설명",
    price: 1000,
    tags: ["태그1"],
    images: ["https://example.com/img.jpg"],
  });
  console.log("createProduct => ", created);

  const patched = await patchProduct(created.id, { price: 2000 });
  console.log("patchProduct => ", patched);

  const deleted = await deleteProduct(created.id);
  console.log("deleteProduct => ", deleted);

  // --- Article 테스트 ---
  const articles = await getArticleList();
  console.log("getArticleList => ", articles);

  const article = await getArticle(articles.list[0].id);
  console.log("getArticle => ", article);

  const createdArticle = await createArticle({
    title: "테스트 제목",
    content: "내용",
    image: "https://example.com/img.jpg",
  });
  console.log("createArticle => ", createdArticle);

  const patchedArticle = await patchArticle(createdArticle.id, {
    title: "수정된 제목",
  });
  console.log("patchArticle => ", patchedArticle);

  const deletedArticle = await deleteArticle(createdArticle.id);
  console.log("deleteArticle => ", deletedArticle);
}

init();
