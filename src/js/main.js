import * as ArticleService from './ArticleService.js';
import * as ProductService from './ProductService.js';

// Article 목록 조회 테스트
ArticleService.getArticleList(1, 10, '').then(data => {
  console.log('최신 게시글 리스트:', data?.list);
});

// Product 등록 및 목록 조회 테스트
async function runProductTest() {
  const products = await ProductService.getProductList(1, 10, '');
  console.log('현재 등록된 상품들:', products?.list);
  
  // TODO: 위의 console.log들은 개발 이후에 삭제할 내용들임.
  const newProduct = await ProductService.createProduct({
    name: "새로운 판다 인형",
    description: "한정판 판다 인형입니다.",
    price: 25000,
    tags: ["인형", "판다"],
    images: ["https://example.com/panda_doll.png"]
  });
  if (newProduct) console.log('상품 등록 성공:', newProduct);
}

runProductTest();