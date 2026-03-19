# 게시물 목록, 상품 포스트 로직 및 테스트 코드(main) 작성

## 📌 프로젝트 소개

스프린트 요구사항을 반영하여 게시물 목록 조회(ArticleService.js) 및 상품 포스트(ProductService.js)하는 로직을 작성하고 main.js에서 이를 console 테스트하는 로직을 작성함.

## 🛠 사용 기술

- HTML, CSS, JS

## 🛠 사용 협업툴

- Git, Github

## 📝지난 피드백 반영 사항

- lang="en" → lang="ko" 로 수정
- button/a 중첩 삭제
- 모든 링크 경로를 파일명 -> "/~" 형태로 변경
- 로고 링크 누락 보완
-

## 🚀 주요 기능

# 1. main.js

- 하기 2개의 js를 import 하여 정상 로직 여부를 테스트
- 테스트에 특정 데이터를 삭제하는 내용이 있어 2번 실행 시 오류 발생하는 것 감안하여 최초 실행 결과를 '결과 첨부' 폴더 내에 첨부
  ![실행 결과 첨부1](./결과%20첨부/미션3_Articles_결과.png)
  ![실행 결과 첨부2](./결과%20첨부/미션3_products_결과.png)
- 등록, 리스트 확인, 수정, 삭제(CRUD) 모두 정상 작동함

# 2. ArticleService.js

- 파일을 export 하여 main.js에서 활용
- 등록, 리스트 확인, 수정, 삭제(CRUD) 함수 작성
- fetch, then, try, catch, aync/await 비동기 함수를 활용

# 3. ProductService.js

- 파일을 export 하여 main.js에서 활용
- 등록, 리스트 확인, 수정, 삭제(CRUD) 함수 작성
- fetch, then, try, catch, aync/await 비동기 함수를 활용

## ✔셀프 체크리스트 (모두 반영!)

[x] Github에 스프린트 미션 PR을 만들어 주세요.

[x] 'https://panda-market-api-crud.vercel.app/docs/#/Article' API를 이용하여 아래 함수들을 구현해 주세요.

[x] getArticleList() : GET 메서드를 사용해 주세요.
[x] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
[x] getArticle() : GET 메서드를 사용해 주세요.
[x] createArticle() : POST 메서드를 사용해 주세요.
[x] request body에 title, content, image 를 포함해 주세요.
[x] patchArticle() : PATCH 메서드를 사용해 주세요.
[x] deleteArticle() : DELETE 메서드를 사용해 주세요.
[x] fetch 를 이용해 주세요.

[x] 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
[x] .then() 메서드를 이용하여 비동기 처리를 해주세요.

[x] .catch() 를 이용하여 오류 처리를 해주세요.

[x] 'https://panda-market-api-crud.vercel.app/docs/#/Product' API를 이용하여 아래 함수들을 구현해 주세요.

[x] getProductList() : GET 메서드를 사용해 주세요.
[x] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
[x] getProduct() : GET 메서드를 사용해 주세요.
[x] createProduct() : POST 메서드를 사용해 주세요.
[x] request body에 name, description, price, tags, images 를 포함해 주세요.
[x] patchProduct() : PATCH 메서드를 사용해 주세요.
[x] deleteProduct() : DELETE 메서드를 사용해 주세요.
[x] async/await 을 이용하여 비동기 처리를 해주세요.

[x] try/catch 를 이용하여 오류 처리를 해주세요.

[x] 구현한 함수들을 아래와 같이 파일을 분리해 주세요.

[x] export를 활용해 주세요.
[x] ProductService.js 파일 Product API 관련 함수들을 작성해 주세요.
[x] ArticleService.js 파일에 Article API 관련 함수들을 작성해 주세요.
[x] 이외의 코드들은 모두 main.js 파일에 작성해 주세요.

[x] import를 활용해 주세요.
[x] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.

## 멘토님께

- 지난 피드백을 보고 정말 꼼꼼히 봐주셨다는 것을 느낄 수 있었습니다. 바쁘실텐데 하나하나 코멘트 해주셔서 조금 더 올바른 코드로 수정할 수 있었어요 감사합니다!

- 이번 미션은 정적 화면에 연결되는 내용이 아니어서 console 화면으로 결과를 확인하는 방식으로 코딩했습니다. 더 나은 main.js 작성 방법이 있었다면 조언해주세요!
