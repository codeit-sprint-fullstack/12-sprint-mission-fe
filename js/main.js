import { getProductList, getProduct } from "./ProductService.js";

async function test() {
  try {
    const list = await getProductList({
      page: 1,
      pageSize: 10,
      keyword: "",
    });

    console.log("상품 목록:", list);

    const product = await getProduct(3035);
    console.log("상품 상세:", product);
  } catch (err) {
    console.error("API 요청 실패:", err.message);
  }
}

test();
