# 🐼 판다마켓 (PandaMarket) FE 프로젝트

<img width="396" height="132" alt="pm_logo" src="https://github.com/user-attachments/assets/93bd1dc7-79d5-44ea-a827-80e3d1ff71ee" />

### 판다마켓은 중고거래를 위한 커뮤니티 플랫폼입니다.

## 🔗 판다마켓 링크

https://pandamarket-fs-12-hs.netlify.app/

## 🛠 기술 스택

- **Markup:** HTML
- **Style:** CSS
- **Script:** JavaScript

## ✨ 주요 구현 페이지 및 기능

### 1. 메인 페이지 (`index.html`)

<img width="1654" height="3470" alt="index" src="https://github.com/user-attachments/assets/a58c1b36-a249-4818-8ee8-b9bb6852448a" />

- 판다마켓의 주요 서비스를 소개하는 히어로 섹션과 메인 섹션, 하단 배너를 포함하고 있습니다.
- 상단 고정바에 로그인 페이지로 넘어가는 로그인 버튼이 있습니다.
- 사용자 트래킹을 위한 Google Analytics(gtag.js)가 적용되어 있습니다.

### 2. 로그인 페이지 (`login.html`)

<img width="1669" height="911" alt="login" src="https://github.com/user-attachments/assets/7c738d08-95b0-42e1-b0a7-0ddafce153d2" />

- 이메일과 비밀번호를 입력하여 로그인할 수 있는 폼을 제공합니다.
- 비밀번호 입력 필드 우측의 눈 모양 아이콘(`btn_visibility_off`)을 통해 비밀번호 표시 여부를 설정할 수 있는 UI를 구성했습니다.
- 구글 및 카카오톡 계정을 이용한 간편 로그인 버튼을 지원합니다.

### 3. 회원가입 페이지 (`signup.html`)

<img width="1669" height="911" alt="signup" src="https://github.com/user-attachments/assets/412b3b47-fbfb-4184-8eb3-87a3669f154d" />

- 신규 사용자 등록을 위해 이메일, 닉네임, 비밀번호, 비밀번호 확인을 입력받습니다.
- 로그인 페이지와 동일한 소셜 간편 로그인 기능을 제공하며, 이미 회원이신 분들을 위한 로그인 페이지 이동 링크가 포함되어 있습니다.

## 🎨 CSS

효율적인 스타일 관리를 위해 CSS 파일을 용도별로 분리하여 관리합니다.

- `reset.css`: 브라우저의 기본 스타일(여백, 폰트 등)을 초기화하여 모든 환경에서 동일한 레이아웃이 적용되도록 합니다.
- `variable.css`: 프로젝트 전반에서 공통으로 사용되는 테마 색상을 CSS 변수(`:root`)로 정의하였습니다.
- **개별 페이지 스타일:** `index.css`, `login.css`, `signup.css` 파일을 통해 각 페이지 구조에 맞는 스타일을 독립적으로 적용했습니다.

## 🎨 JavaScript

JS 파일을 용도별로 분리하고 각자 모듈화해서 관리합니다

- `main.js`: `article-service.js`와`product-service.js`를 `import`해서 사용하는 메인 자바스크립트입니다.
- `article-service.js`, `product-service.js`: 게시글과 상품의 CRUD 기능을 각 자바스크립트 파일에 모듈화하여 필요한 곳에 사용하기 용이하게 했습니다.

## 📁 프로젝트 구조

```text
📦 12-sprint-mission-fe
 ┣ 📂 js
 ┃ ┣ 📜 main.js
 ┃ ┣ 📜 article-service.js
 ┃ ┣ 📜 product-service.js
 ┣ 📂 css
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 login.css
 ┃ ┣ 📜 reset.css
 ┃ ┣ 📜 signup.css
 ┃ ┗ 📜 variable.css
 ┣ 📂 images
 ┃ ┗ 📜 (로고, 소셜 아이콘, 배너 이미지 등)
 ┣ 📜 index.html
 ┣ 📜 login.html
 ┣ 📜 signup.html
 ┣ 📜 privacy.html
 ┣ 📜 items.html
 ┣ 📜 faq.html
 ┗ 📜 README.md
```
