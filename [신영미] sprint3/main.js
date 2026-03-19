// 테스트 코드로 대체

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

//Article 정상 import 테스트
async function test1() {
  try {
    const result1 = await getArticleList(1, 5, "API");
    const result2 = await createArticle("새로운 API2", "새로운 API 목록2입니다." , "https://example.com/test-image.png");
    const result3 = await getArticleList(1, 5, "API");
    const result4 = await getArticle(5650);
    const result5 = await patchArticle(5650, "새로운 PATCH 됐습니다", "내용이 잘 들어갔습니다!");
    const result6 = await getArticle(5650); // patch 결과 확인
    const result7 = await deleteArticle(5650);
    const result8 = await getArticle(5650); // delete 결과 확인

    console.log("결과1 데이터 : ", result1, "결과2 데이터 : ", result2);
    console.log("결과3 데이터 : ", result3, "결과4 데이터 : ", result4);
    console.log("결과5 데이터 : ", result5, "결과6 데이터 : ", result6);
    console.log("결과7 데이터 : ", result7, "결과6 데이터 : ", result7);
  } catch (error) {
    console.error("테스트 실행 중 에러:", error);
  }
}

test1();

//Article import 테스트
async function test2() {
  try {
    const resulta = await getProductList(1, 5, "API");
    const resultb = await createProduct("POST로 새상품 테스트", "API 내용이 잘 들어갔습니다!", 149000, "test","https://example.com/test-image.png");
  const resultc = await getProductList(1, 5, "API");
    const resultd = await getProduct(2770);
    const resulte = await patchProduct(2770, "PATCH로 업데이트 테스트 상품", "내용이 잘 들어갔습니다!", 149000, "test");
    const resultf = await getProduct(2770); // patch 결과 확인
    const resultg = await deleteProduct(2770);
    const resulth = await getProduct(2770); // delete 결과 확인

    console.log("결과a 데이터 : ", resulta, "결과b 데이터 : ", resultb);
    console.log("결과c 데이터 : ", resultc, "결과d 데이터 : ", resultd);
    console.log("결과e 데이터 : ", resulte, "결과f 데이터 : ", resultf);
    console.log("결과g 데이터 : ", resultg, "결과h 데이터 : ", resulth);
  } catch (error) {
    console.error("테스트 실행 중 에러:", error);
  }
}

test2();
