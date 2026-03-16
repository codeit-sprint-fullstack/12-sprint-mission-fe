import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
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

async function testProduct() {
  try {
    const data = await getProduct(3036);
    console.log("상품 상세:", data);
  } catch (err) {
    console.error("상품 조회 실패:", err.message);
  }
}

async function testCreateProduct() {
  try {
    const data = await createProduct({
      name: "테스트 상품",
      description: "테스트 설명",
      price: 10000,
      tags: ["test"],
      images: ["https://example.com/img.jpg"],
    });

    console.log("상품 생성:", data);
  } catch (err) {
    console.error("상품 생성 실패:", err.message);
  }
}

async function testPatchProduct() {
  try {
    const data = await patchProduct(3036, {
      price: 12000,
    });

    console.log("상품 수정:", data);
  } catch (err) {
    console.error("상품 수정 실패:", err.message);
  }
}

testPatchProduct();
