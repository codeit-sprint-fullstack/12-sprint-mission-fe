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

//test 실행

getArticleList(1, 10, "").then((data) => console.log("글목록", data)); //게시글 목록 불러오기

getArticle(5588).then((data) => console.log("글하나", data)); //특정 게시글 불러오기

createArticle("게시글 제목", "내용", "https://이미지url.com/1.jpg").then(
  (data) => console.log("생성글", data),
); //게시글 생성

patchArticle(5588, { title: "바뀐 제목", content: "바뀐 내용" }).then((data) =>
  console.log("수정된 글", data),
); //게시글 수정

deleteArticle(2990).then(() => console.log("글 삭제됨")); //게시글 삭제

const ProductListGet = async () => {
  const data = await getProductList(1, 10, "");
  console.log("상품목록", data);
};

ProductListGet();

const ProductGet = async () => {
  const data = await getProduct(2998);
  console.log("상품", data);
};

ProductGet();

const ProductCreate = async () => {
  const data = await createProduct(
    "에어프라이어",
    "소형 가정용 에어프라이어",
    30000,
    ["전자제품"],
    ["https://example.com/..."],
  );
  console.log("생성상품", data);
};

ProductCreate();

const ProductsPatch = async () => {
  const data = await patchProduct(2993, { name: "드라이기", price: 5000 });
  console.log("수정된 상품", data);
};

ProductsPatch();

const ProductDelete = async () => {
  await deleteProduct(2997);
  console.log("상품 삭제됨");
};

ProductDelete();
