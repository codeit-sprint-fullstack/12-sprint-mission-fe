import {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
} from "../ArticleService.js";

import {
  getProduct,
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
} from "../ProductService.js";

async function main() {
  try {
    // Article
    const articleListData = await getArticleList(1, 10, "");
    console.log(articleListData);

    const firstArticleId = articleListData.list[0].id;
    const article = await getArticle(firstArticleId);
    console.log(article);

    const createdArticle = await createArticle(
      "test title",
      "test content",
      "https://example.com",
    );
    console.log(createdArticle);

    const newArticleId = createdArticle.id;
    const patchedArticle = await patchArticle(
      newArticleId,
      "test title patch",
      "text content patch",
      "https://example.com",
    );
    console.log(patchedArticle);

    const deletedArticle = await deleteArticle(newArticleId);
    console.log(deletedArticle);

    // Product
    const productListData = await getProductList(1, 10, "");
    console.log(productListData);

    const firstProductId = productListData.list[0].id;
    const product = await getProduct(firstProductId);
    console.log(product);

    const createdProduct = await createProduct(
      "test name",
      "test destruction",
      1000,
      ["text", "test"],
      ["https://example.com"],
    );
    console.log(createdProduct);

    const newProductId = createdProduct.id;
    const patchedProduct = await patchProduct(
      newProductId,
      "test name patch",
      "test destruction patch",
      2000,
      ["test", "patch"],
      ["https://example.com"],
    );
    console.log(patchedProduct);

    const deletedProduct = await deleteProduct(newProductId);
    console.log(deletedProduct);
  } catch (err) {
    console.error(err);
  }
}

main();
