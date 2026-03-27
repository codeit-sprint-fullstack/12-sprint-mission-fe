import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./js/ArticleService.js";

import * as ProductService from "./js/ProductService.js";

getArticleList(1, 5, "노트북").then((data) => {
  console.log(data);
});

getArticle(5798).then((data) => {
  console.log(data);
});

const myNewPost = {
  title: "세빈",
  content: "POST 요청까지 성공해버렸지 뭐야",
  image: "https://picsum.photos/200",
};

// 인자를 각각 전달하는 지금 코드에 맞게 호출!
createArticle(myNewPost.title, myNewPost.content, myNewPost.image).then(
  (data) => {
    console.log(" 게시글 생성 성공!", data);
  }
);

patchArticle({
  updateId: 5799,
  updates: {
    title: "객체로 넘겨서 수정 성공!",
    content: "이 방식이 훨씬 깔끔하네요!",
  },
}).then((data) => {
  console.log(" 수정 완료 데이터:", data);
});

deleteArticle(5798).then((data) => {
  console.log("삭제 완료 : ", data);
});

/*product test*/

const runProductTest = async () => {
  console.log("--- PANDA MARKET API TEST START ---");

  // 1. 상품 등록 (POST)
  const newProductData = {
    name: "빈티지 필름 카메라",
    description: "작동 잘 되는 입문용 카메라입니다. 외관 깨끗해요.",
    price: 85000,
    tags: ["전자제품", "카메라", "중고"],
    images: ["https://picsum.photos/400/300"],
  };

  const createdProduct = await ProductService.createProduct(newProductData);

  if (!createdProduct) {
    console.log("상품 등록 실패");
    return;
  }

  const pid = createdProduct.id;
  console.log(`상품 등록 완료 (ID: ${pid})`);

  // 2. 등록한 상품 상세 조회 (GET)
  const productInfo = await ProductService.getProduct(pid);
  if (productInfo) {
    console.log(
      `조회 결과 - 상품명: ${productInfo.name} / 가격: ${productInfo.price}`
    );
  }

  // 3. 상품 정보 수정 (PATCH)
  const updateInfo = {
    product: {
      price: 75000,
      description: "가격 인하합니다.",
    },
  };

  const updated = await ProductService.patchProduct({
    productId: pid,
    product: updateInfo.product,
  });

  if (updated) {
    console.log(`수정 완료 - 변경된 가격: ${updated.price}`);
  }

  // 4. 전체 목록 확인 (GET List)
  const listResponse = await ProductService.getProductList({
    page: 1,
    pageSize: 5,
  });
  if (listResponse) {
    console.log(`전체 상품 수: ${listResponse.totalCount}`);
    // 상위 3개 데이터 요약 출력
    const summary = listResponse.list.slice(0, 3).map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
    }));
    console.table(summary);
  }

  // 5. 테스트용 상품 삭제 (DELETE)
  const deleteResult = await ProductService.deleteProduct(pid);
  if (deleteResult) {
    console.log(`${pid}번 상품 삭제 성공. 테스트 종료.`);
  }

  console.log("--- ALL TESTS PASSED ---");
};

runProductTest();
