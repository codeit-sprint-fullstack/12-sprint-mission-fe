import * as ProductService from "./api/ProductService.js";
import * as ArticleService from "./api/ArticleService.js";

// ==========================================
// 1. Product API 테스트 (async / await 방식)
// ==========================================
const runProductTests = async () => {
  console.log("\n✅ Product API 테스트 시작");

  // 1. 상품 목록 조회 (좋아요순, 1페이지, 3개)
  const productList = await ProductService.getProductList(1, 3, 'favorite', '');
  console.log("✅ [Product] 목록 조회 결과:\n", productList);

  // 2. 상품 생성
  const newProductData = {
    name: "테스트용 상품",
    description: "테스트 상품 설명입니다.",
    price: 50000,
    tags: ["테스트", "IT"],
    images: ["https://example.com/product-image.png"]
  };

  const createdProduct = await ProductService.createProduct(newProductData);
  console.log("✅ [Product] 생성 결과:\n", createdProduct);

  // 3. 상품 상세 조회
  if (createdProduct && createdProduct.id) {
    const productDetail = await ProductService.getProduct(createdProduct.id);
    console.log(`✅ [Product] ${createdProduct.id}번 상세 조회:\n`, productDetail);
  }

  // 4. 상품 수정
  if (createdProduct && createdProduct.id) {
    const updateData = {
      price: 60000,
      description: "수정된 테스트 상품 설명입니다."
    };

    const updatedProduct = await ProductService.patchProduct(createdProduct.id, updateData);
    console.log(`✅ [Product] ${createdProduct.id}번 수정 결과:\n`, updatedProduct);
  }

  // 5. 상품 삭제
  if (createdProduct && createdProduct.id) {
    const deletedProduct = await ProductService.deleteProduct(createdProduct.id);
    console.log(`✅ [Product] ${createdProduct.id}번 삭제 완료:\n`, deletedProduct);
  }
};

runProductTests();

// ==========================================
// 2. Article API 테스트 (Promise / .then 방식)
// ==========================================
console.log("\n✅ Article API 테스트 시작");

// (1) 게시글 목록 조회 (최신순, 1페이지, 3개)
ArticleService.getArticleList(1, 3, "recent", "").then((data) => {
  console.log("✅ [Article] 목록 조회 결과:\n", data);
});

// (2) 게시글 생성
const newArticleData = {
  title: "테스트 게시글 제목입니다.",
  content: "API 테스트 중입니다. 내용이 잘 들어가나요?",
  image: "https://example.com/test-image.png",
};

ArticleService.createArticle(newArticleData)
  .then((createdData) => {
    console.log("✅ [Article] 생성 결과:\n", createdData);

    if (createdData && createdData.id) {

      return ArticleService.getArticle(createdData.id)
        .then((detailData) => {
          console.log(`✅ [Article] ${createdData.id}번 상세 조회:\n`, detailData);

          const updateData = {
            title: "수정된 게시글 제목입니다.",
            content: "게시글 내용을 수정했습니다."
          };

          return ArticleService.patchArticle(createdData.id, updateData);
        })
        .then((updatedData) => {
          console.log(`✅ [Article] ${createdData.id}번 수정 결과:\n`, updatedData);

          return ArticleService.deleteArticle(createdData.id);
        })
        .then((deleteData) => {
          console.log(`✅ [Article] ${createdData.id}번 삭제 완료:\n`, deleteData);
        });

    }
  });
