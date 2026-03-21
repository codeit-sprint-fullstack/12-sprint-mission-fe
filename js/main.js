import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

async function testProductList(params) {
  try {
    const list = await getProductList(params);

    console.log("상품 목록:", list);
  } catch (err) {
    console.error("상품 목록 조회 실패:", err.message);
  }
}

async function testProduct(id) {
  try {
    const data = await getProduct(id);
    console.log("상품 상세:", data);
  } catch (err) {
    console.error("상품 조회 실패:", err.message);
  }
}

async function testCreateProduct(productData) {
  try {
    const data = await createProduct(productData);

    console.log("상품 생성:", data);
  } catch (err) {
    console.error("상품 생성 실패:", err.message);
  }
}

async function testPatchProduct(id, updateData) {
  try {
    const data = await patchProduct(id, updateData);

    console.log("상품 수정:", data);
  } catch (err) {
    console.error("상품 수정 실패:", err.message);
  }
}

async function testDeleteProduct(id) {
  try {
    const data = await deleteProduct(id);
    console.log("삭제된 상품 id:", data.id);
  } catch (err) {
    console.error("상품 삭제 실패:", err.message);
  }
}

// testProductList({ page: 1, pageSize: 10, keyword: "" });
// testProductList();

// testCreateProduct({
//   name: "테스트 상품",
//   description: "테스트 설명",
//   price: 10000,
//   tags: ["test"],
//   images: ["https://example.com/img.jpg"],
// });

// testProduct(3062);

// testPatchProduct(3062, { name: "새 상품" });

// testDeleteProduct(3062);

/* Article */
async function testArticleList(params) {
  try {
    const list = await getArticleList(params);

    console.log("글 목록:", list);
  } catch (err) {
    console.error("글 목록 조회 실패:", err.message);
  }
}

async function testArticle(id) {
  try {
    const data = await getArticle(id);
    console.log("글 상세:", data);
  } catch (err) {
    console.error("글 조회 실패:", err.message);
  }
}

async function testCreateArticle(productData) {
  try {
    const data = await createArticle(productData);

    console.log("글 작성:", data);
  } catch (err) {
    console.error("글 작성 실패:", err.message);
  }
}

async function testPatchArticle(id, updateData) {
  try {
    const data = await patchArticle(id, updateData);

    console.log("글 수정:", data);
  } catch (err) {
    console.error("글 수정 실패:", err.message);
  }
}

async function testDeleteArticle(id) {
  try {
    const data = await deleteArticle(id);
    console.log("삭제된 글 id:", data.id);
  } catch (err) {
    console.error("글 삭제 실패:", err.message);
  }
}

testArticleList({ page: 1, pageSize: 10, keyword: "" });
// testArticle(5758);

// testCreateArticle({
//  title: "테스트 글",
//  content: "테스트 글 내용",
//  image: "https://example.com/img.jpg",
// });

// testPatchArticle(5758, { image: "https://picsum.photos/200/300" });

// testDeleteArticle(5758);
