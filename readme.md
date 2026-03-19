# 🐼 판다마켓 (Panda Market)

> 중고물품을 자유롭게 거래하는 '판다마켓' 서비스의 프론트엔드 프로젝트입니다.<br/>
> **Codeit Sprint FS 12기** | 작성자: 김나린

---

## 🔗 Project Links

- [실제 배포 사이트 보기 (Netlify)](https://sweet-gaufre-8bad30.netlify.app/)

## 소개

중고물품을 거래하는 '판다마켓' 사이트의 프론트엔드를 제작중입니다.

## 🛠 Tech Stack

- HTML5 / CSS3
- Git / GitHub
- Netlify (Deployment)

## 📂 프로젝트 구조

- `index.html`: 랜딩 페이지
- `login.html`: 로그인 페이지
- `signup.html`: 회원가입 페이지
- `images/`: 로고, SNS 아이콘 등 이미지 파일
- `color.css`: color 변수 정의 파일
- `style.css`: 랜딩 페이지 스타일
- `login-signup.css`: 로그인&회원가입 페이지 스타일

### 체크리스트

- [x] Github에 스프린트 미션 PR을 만들어 주세요.
- [x] 'https://panda-market-api-crud.vercel.app/docs/#/Article' API를 이용하여 아래 함수들을 구현해 주세요.
  - [x] `getArticleList()` : GET 메서드를 사용해 주세요.
    - [x] `page`, `pageSize`, `keyword` 쿼리 파라미터를 이용해 주세요.
  - [x] `getArticle()` : GET 메서드를 사용해 주세요.
  - [x] `createArticle()` : POST 메서드를 사용해 주세요.
    - [x] request body에 `title`, `content`, `image` 를 포함해 주세요.
  - [x] `patchArticle()` : PATCH 메서드를 사용해 주세요.
  - [x] `deleteArticle()` : DELETE 메서드를 사용해 주세요.
- [x] `fetch` 혹은 `axios` 를 이용해 주세요.
  - [x] 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
- [x] `.then()` 메서드를 이용하여 비동기 처리를 해주세요.
- [x] `.catch()` 를 이용하여 오류 처리를 해주세요.
- [x] 'https://panda-market-api-crud.vercel.app/docs/#/Product' API를 이용하여 아래 함수들을 구현해 주세요.
  - [x] `getProductList()` : GET 메서드를 사용해 주세요.
    - [x] `page`, `pageSize`, `keyword` 쿼리 파라미터를 이용해 주세요.
  - [x] `getProduct()` : GET 메서드를 사용해 주세요.
  - [x] `createProduct()` : POST 메서드를 사용해 주세요.
    - [x] request body에 `name`, `description`, `price`, `tags`, `images` 를 포함해 주세요.
  - [x] `patchProduct()` : PATCH 메서드를 사용해 주세요.
  - [x] `deleteProduct()` : DELETE 메서드를 사용해 주세요.
- [x] `async/await` 을 이용하여 비동기 처리를 해주세요.
- [x] `try/catch` 를 이용하여 오류 처리를 해주세요.
- [x] 구현한 함수들을 아래와 같이 파일을 분리해 주세요.
  - [x] `export`를 활용해 주세요.
  - [x] `ProductService.js` 파일 Product API 관련 함수들을 작성해 주세요.
  - [x] `ArticleService.js` 파일에 Article API 관련 함수들을 작성해 주세요.
- [x] 이외의 코드들은 모두 `main.js` 파일에 작성해 주세요.
  - [x] `import`를 활용해 주세요.
  - [ ] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.
