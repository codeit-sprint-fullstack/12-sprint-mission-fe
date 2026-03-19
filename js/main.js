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

const testArticle = async () => {
  console.log("===== Article 테스트 시작 =====");

  const list = await getArticleList(1, 10, "");
  console.log("글목록", list);

  const created = await createArticle(
    "글 적어보고가요",
    "내용적어보고가요",
    "https://이미지url.com/1.jpg",
  );
  console.log("생성글", created);

  const id = created.id;

  const single = await getArticle(id);
  console.log("글하나", single);

  const updated = await patchArticle(id, {
    title: "글 수정해보고 갑니다~",
    content: "내용 수정해보고 가요",
  });
  console.log("수정된 글", updated);

  await deleteArticle(id);
  console.log("삭제됨");

  console.log("===== Article 테스트 끝 =====");
};

const testProduct = async () => {
  console.log("===== Product 테스트 시작 =====");

  const list = await getProductList(1, 10, "");
  console.log("상품목록", list);

  const created = await createProduct(
    "연필",
    "연필임다",
    1000,
    ["학용품"],
    ["https://example.com/image.jpg"],
  );
  console.log("생성상품", created);

  const id = created.id;

  const single = await getProduct(id);
  console.log("상품", single);

  const updated = await patchProduct(id, {
    name: "수정된 연필",
    price: 5000,
  });
  console.log("수정된 상품", updated);

  await deleteProduct(id);
  console.log("상품 삭제됨");

  console.log("===== Product 테스트 끝 =====");
};

(async () => {
  await testArticle();
  await testProduct();
})();
