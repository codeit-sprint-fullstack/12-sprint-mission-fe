import { getProductList } from "./ProductService.js";

async function test() {
  try {
    const data = await getProductList({
      page: 1,
      pageSize: 10,
      keyword: "",
    });

    console.log("상품 목록:", data);
  } catch (err) {
    console.error("상품 목록 조회 실패:", err.message);
  }
}

test();
