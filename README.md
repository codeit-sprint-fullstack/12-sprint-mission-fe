# 🛒 판다마켓 프로젝트

## 🎯 프로젝트 개요

- 프로젝트 이름 : 판다마켓
- 개발 목적 : 미션 기반 마켓 서비스 UI 구현 학습
- 구현 단계 : 1차 / 2차 미션 진행

---

## 📌 1차 미션 구현 내용

### ✅ index.html 메인 페이지 제작

- Figma 디자인 시안을 기반으로 HTML 구조 구현
- 시안과 동일한 레이아웃 구성
- 마켓 서비스 기본 화면 제작
- 요소 배치 및 스타일링 적용

---

## 📌 2차 미션 구현 내용

### 🔐 로그인 / 회원가입 페이지 구현

#### ✅ 공통 기능

- "판다마켓" 로고 클릭 시 루트(`/`)로 이동
- SNS 아이콘 클릭 시 외부 페이지 이동
  - Google → https://www.google.com/
  - Kakao → https://www.kakaocorp.com/page/
- input 요소 focus 시 테두리 색상 변경
- palette 색상값을 CSS 변수(`:root`)로 등록하여 사용
- Google Analytics(GA4) 적용하여 방문자 수 확인 가능

---

### 🔑 로그인 페이지

- 이메일 / 비밀번호 입력창 구현
- 비밀번호 보기 기능 (JavaScript 없이 checkbox + CSS 방식 구현)
- 로그인 버튼 구현
- "회원가입" 버튼 클릭 시 `/signup` 페이지 이동

---

### 📝 회원가입 페이지

- 이메일 / 닉네임 / 비밀번호 / 비밀번호 확인 입력창 구현
- 비밀번호 보기 기능 동일 적용
- "로그인" 버튼 클릭 시 `/login` 페이지 이동

---

## 🧠 개발 특징

### 1차

- 디자인 시안 기반 구현
- HTML 구조 먼저 설계 후 스타일 적용
- 컴포넌트 분리 방식 고려

### 2차

- 공통 CSS 파일 사용으로 코드 재사용성 강화
- palette 색상을 CSS 변수로 관리하여 유지보수성 향상
- 피그마 수치 기반 정밀 구현
- 정적 배포 환경을 고려한 상대경로 구조 설계
- GA4 연동을 통한 방문자 추적 기능 추가

---

## 📁 폴더 구조

```/index.html
/login.html
/signup.html
/css/login-signup.css
/reset/reset.css
/images/
```

---

## 🏃 실행 방법

1. 프로젝트 폴더 열기
2. `index.html` 우클릭
3. Open with Live Server 실행

---

## ✨ 학습 내용

### 1차

- HTML 구조 설계 방법
- 디자인 시안 기반 개발 방식
- 레이아웃 구성 이해

### 2차

- 공통 스타일 구조 설계 방법
- CSS 변수 활용 방법
- JS 없이 인터랙션 구현 방식 이해
- 정적 페이지에서의 경로 관리
- Google Analytics 적용 경험

---

## 🔥 향후 계획 (3차 미션 - API 연동)

### 📌 Article API 구현

- Github에 스프린트 미션 PR 생성
- `fetch` 또는 `axios`를 이용한 API 호출
- `.then()` 기반 비동기 처리
- `.catch()`를 이용한 오류 처리
- 응답 상태 코드가 2XX가 아닐 경우 콘솔에 에러 메시지 출력

#### 구현 함수

- getArticleList(page, pageSize, keyword)
- getArticle(id)
- createArticle({ title, content, image })
- patchArticle(id, data)
- deleteArticle(id)

---

### 📌 Product API 구현

- `async/await` 기반 비동기 처리
- `try/catch`를 이용한 오류 처리

#### 구현 함수

- getProductList(page, pageSize, keyword)
- getProduct(id)
- createProduct({ name, description, price, tags, images })
- patchProduct(id, data)
- deleteProduct(id)

---

### 📂 파일 분리 구조

```/js
├── ArticleService.js
├── ProductService.js
└── main.js
```

- ArticleService.js → Article API 관련 함수 작성
- ProductService.js → Product API 관련 함수 작성
- main.js → 함수 실행 및 테스트 코드 작성
- export / import 활용하여 모듈화 구성

---

### 🎯 목표

- REST API 이해도 향상
- 비동기 처리 방식 비교 (.then vs async/await)
- 모듈화 구조 설계 경험
- 실제 CRUD 흐름 구현
