import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

async function testProductList() {
  try {
    const list = await getProductList({
      page: 1,
      pageSize: 10,
      keyword: "",
    });

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

testProductList();

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
