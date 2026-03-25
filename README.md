# 🛒 판다마켓 프로젝트 (Panda Market)

![Profile views](https://komarev.com/ghpvc/?username=juengseulki&color=blue)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Fetch API](https://img.shields.io/badge/Fetch_API-000000?style=for-the-badge)

---

## 📑 목차

- [📖 프로젝트 소개](#-프로젝트-소개)
- [🚀 프로젝트 특징](#-프로젝트-특징-highlights)
- [⭐ 주요 기능](#-주요-기능-key-features)
- [🌐 프로젝트 링크](#-프로젝트-링크)
- [🖥 프로젝트 미리보기](#-프로젝트-미리보기)
- [🧑‍💻 기술 스택](#-기술-스택)
- [🧠 기술 선택 이유](#-기술-선택-이유-why-tech)
- [📁 프로젝트 구조](#-프로젝트-구조)
- [🏗 프로젝트 아키텍처](#-프로젝트-아키텍처-project-architecture)
- [🏃 실행 방법](#-실행-방법)
- [📌 미션 진행 기록](#-미션-진행-기록)
  - [1️⃣ 1차 미션](#1️⃣-1차-미션)
  - [2️⃣ 2차 미션](#2️⃣-2차-미션)
  - [3️⃣ 3차 미션](#3️⃣-3차-미션)
- [🛠 트러블슈팅](#-트러블슈팅-troubleshooting)
- [✨ 학습 내용](#-학습-내용)
- [🚀 향후 계획](#-향후-계획)
- [📊 GitHub 통계](#-github-통계)
- [🎯 프로젝트 목표](#-프로젝트-목표)

---

## 📖 프로젝트 소개

판다마켓(Panda Market) 프로젝트는  
HTML, CSS, JavaScript 기반으로 **마켓 서비스 UI 구현 및 REST API 연동을 학습하기 위한 스프린트 미션 프로젝트**입니다.

이 프로젝트를 통해 다음 내용을 학습했습니다.

- 웹 페이지 UI 구현
- 사용자 인터랙션 구현
- REST API 데이터 처리
- 비동기 처리 방식 이해
- 코드 모듈화 및 구조 설계

현재 **1차 ~ 3차 미션까지 구현 완료**했습니다.

---

## 🚀 프로젝트 특징 (Highlights)

- 🎨 **Figma 디자인 시안 기반 UI 구현**
- 🔐 **로그인 / 회원가입 페이지 인터랙션 구현**
- 🎨 **CSS 변수 기반 스타일 관리**
- 📊 **Google Analytics(GA4) 방문자 분석 적용**
- 🔗 **REST API 기반 Article / Product CRUD 구현**
- ⚙ **비동기 처리 방식 비교 학습**
  - then / catch
  - async / await
- 📦 **Service Layer 구조로 코드 모듈화**

---

## ⭐ 주요 기능 (Key Features)

- 🎨 **Figma 기반 UI 구현**
  - 디자인 시안을 기반으로 정밀한 레이아웃 구현
  - 픽셀 단위 스타일 적용

- 🔐 **로그인 / 회원가입 페이지 구현**
  - 사용자 입력 폼 구성
  - 비밀번호 보기 기능 (checkbox + CSS 방식)

- 🎨 **CSS 변수 기반 스타일 관리**
  - palette 색상을 CSS 변수로 관리
  - 유지보수성과 재사용성 향상

- 📊 **Google Analytics 적용**
  - GA4를 이용한 방문자 추적 기능 구현

- 🔗 **REST API 연동**
  - Article / Product CRUD 기능 구현
  - fetch API를 이용한 데이터 통신

- ⚙ **비동기 처리 방식 학습**
  - `.then / .catch`
  - `async / await`

- 📦 **서비스 레이어 분리**
  - API 로직을 Service 파일로 분리
  - export / import를 활용한 모듈화 구조

---

## 🌐 프로젝트 링크

**GitHub Repository**

https://github.com/juengseulki/12-sprint-mission-fe

**Live Demo**

https://padamarket-jsk.netlify.app/

---

## 🎬 프로젝트 동작 미리보기

![demo](/images/readme-img/demo.gif)

---

## 🖥 프로젝트 미리보기

### 메인 페이지

![main](/images/readme-img/main-preview.png)

### 로그인 페이지

![login](/images/readme-img//login-preview.png)

### 회원가입 페이지

![signup](/images/readme-img/signup-preview.png)

---

## 🧑‍💻 기술 스택

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### API

- Fetch API
- REST API

### Analytics

- Google Analytics (GA4)

### 개발 환경

- VSCode
- Live Server
- Git
- GitHub
- Netlify

---

## 🧠 기술 선택 이유 (Why Tech)

### HTML / CSS

정적인 UI 구조를 설계하고 디자인 시안을 구현하기 위해 HTML과 CSS를 사용했습니다.  
Figma 디자인을 기반으로 레이아웃을 구성하고, CSS를 활용하여 스타일을 적용했습니다.

또한 CSS 변수를 활용하여 색상을 관리함으로써 유지보수성과 재사용성을 높였습니다.

---

### JavaScript

사용자 인터랙션을 구현하고 API 요청을 처리하기 위해 JavaScript를 사용했습니다.  
특히 REST API와 통신을 통해 데이터를 가져오고 처리하는 기능을 구현했습니다.

---

### Fetch API

서버와 HTTP 통신을 하기 위해 Fetch API를 사용했습니다.

Fetch API를 사용한 이유

- 브라우저에서 기본적으로 제공되는 API
- Promise 기반 비동기 처리 지원
- 간단한 문법으로 HTTP 요청 가능

---

### Async / Await

비동기 코드의 가독성을 높이기 위해 async / await 문법을 사용했습니다.

이번 프로젝트에서는 비동기 처리 방식을 비교하기 위해

- Article API → `.then() / .catch()`
- Product API → `async / await`

두 가지 방식을 모두 구현했습니다.

이를 통해 비동기 처리 방식의 차이를 직접 비교하고 이해할 수 있었습니다.

---

### Service Layer 구조

API 요청 로직을 Service 파일로 분리하여 코드 구조를 개선했습니다.

파일 구조

- ArticleService.js → Article API 함수
- ProductService.js → Product API 함수
- main.js → 실행 및 테스트 코드

이 구조를 통해

- 코드 가독성 향상
- 유지보수 용이
- 기능 분리

와 같은 장점을 얻을 수 있었습니다.

---

## 📁 프로젝트 구조

```
/
├─ index.html
├─ login.html
├─ signup.html
├─ faq.html
├─ items.html
├─ privacy.html
│
├─ css
│ └─ login-signup.css
│
├─ reset
│ └─ reset.css
│
├─ images
│
└─ js
├─ pages
│ └─ main.js
│
└─ services
├─ ArticleService.js
└─ ProductService.js
```

| 폴더        | 설명                        |
| ----------- | --------------------------- |
| images      | 프로젝트 이미지 및 아이콘   |
| css         | 로그인 / 회원가입 스타일    |
| reset       | 브라우저 기본 스타일 초기화 |
| js/pages    | 실행 코드(main.js)          |
| js/services | API 호출 함수 모음          |

---

## 🏗 프로젝트 아키텍처 (Project Architecture)

판다마켓 프로젝트는 **Service Layer 구조**를 기반으로 구성되었습니다.

API 요청 로직과 실행 코드를 분리하여  
코드의 가독성과 유지보수성을 높였습니다.

---

### 전체 동작 구조

```
index.html
↓
main.js (실행 코드)
↓
Service Layer
├ ArticleService.js
└ ProductService.js
↓
Fetch API
↓
Panda Market API Server
↓
Response(JSON)
↓
Console 출력
```

---

### 역할 설명

**index.html**

- 프로젝트의 메인 HTML 파일
- main.js를 module 방식으로 로드

---

**main.js**

- API 함수 실행
- 테스트 코드 작성
- 서비스 레이어 import

---

**ArticleService.js**

- Article 관련 API 함수 관리
- 게시글 CRUD 기능 담당

---

**ProductService.js**

- Product 관련 API 함수 관리
- 상품 CRUD 기능 담당

---

### 구조 설계 이유

API 요청 로직을 서비스 파일로 분리함으로써

- 코드 가독성 향상
- 기능 분리
- 유지보수 용이

와 같은 장점을 얻을 수 있었습니다.

---

## 🏃 실행 방법

1. 프로젝트 클론

```
git clone https://github.com/juengseulki/12-sprint-mission-fe
```

2. VSCode에서 프로젝트 폴더 열기

3. index.html 실행

4. Live Server 실행

5. 브라우저 F12 → Console 확인

---

## 📌 미션 진행 기록

### 1️⃣ 1차 미션

#### 구현 목표

판다마켓 서비스의 **메인 페이지(index.html)** 를 구현했습니다.  
Figma 디자인 시안을 기반으로 웹 페이지의 **레이아웃 구조와 UI 구성 요소를 구현하는 것**을 목표로 했습니다.

#### 구현 내용

- Figma 디자인 시안 기반 HTML 구조 설계
- 시안과 동일한 레이아웃 구성
- 서비스 소개 및 기능 안내 UI 구현
- 요소 배치 및 스타일 적용

#### 주요 구현 섹션

**Hero Section**

서비스의 핵심 기능을 소개하는 상단 영역

구성 요소

- 서비스 소개 텍스트
- 메인 이미지
- 주요 기능 안내

사용자가 사이트에 처음 접속했을 때  
서비스의 핵심 내용을 빠르게 이해할 수 있도록 구성했습니다.

**Feature Section**

서비스 기능을 설명하는 영역

구성 요소

- 기능 카드
- 기능 설명 텍스트
- 서비스 이미지

서비스의 특징을 시각적으로 전달할 수 있도록 설계했습니다.

**Footer**

페이지 하단 영역

구성 요소

- 회사 정보
- 이용약관
- 개인정보 처리방침

사이트의 기본 정보를 제공하는 역할을 합니다.

#### 개발 과정

1. Figma 디자인 시안 분석
2. HTML 구조 설계
3. 레이아웃 구성
4. CSS 스타일 적용

#### 학습 내용

- HTML 구조 설계 방법
- 디자인 시안 기반 개발 방식
- 웹 페이지 레이아웃 구성 이해

---

### 2️⃣ 2차 미션

#### 구현 목표

사용자 인증 기능을 위한 **로그인 페이지와 회원가입 페이지 UI를 구현했습니다.**

사용자 입력 인터페이스와 기본적인 인터랙션을 구현하는 것을 목표로 했습니다.

---

#### 로그인 페이지

구현 기능

- 이메일 입력창
- 비밀번호 입력창
- 로그인 버튼
- 회원가입 페이지 이동 버튼

##### 비밀번호 보기 기능

JavaScript를 사용하지 않고 **checkbox + CSS 방식**으로 구현했습니다.

구현 방식

checkbox의 checked 상태를 활용하여  
CSS selector를 통해 password input의 표시 여부를 변경했습니다.

이를 통해

- JavaScript 없이 인터랙션 구현
- 접근성 유지
- 코드 구조 단순화

를 달성할 수 있었습니다.

---

#### 회원가입 페이지

사용자가 계정을 생성할 수 있도록 다음 입력 요소를 구현했습니다.

입력 요소

- 이메일
- 닉네임
- 비밀번호
- 비밀번호 확인

사용자가 쉽게 정보를 입력할 수 있도록  
입력 필드와 버튼의 UI를 구성했습니다.

---

#### 공통 기능

로그인 / 회원가입 페이지에 공통적으로 적용된 기능입니다.

**로고 이동 기능**

"판다마켓" 로고 클릭 시 루트(`/`) 페이지로 이동하도록 구현했습니다.

**SNS 아이콘 링크**

외부 페이지로 이동하도록 설정했습니다.

- Google → https://www.google.com
- Kakao → https://www.kakaocorp.com/page

**input focus 스타일**

사용자가 입력창을 클릭하면

- 테두리 색상 변경
- 사용자 입력 상태 강조

가 적용되도록 구현했습니다.

---

#### CSS 구조 개선

프로젝트 색상을 CSS 변수로 관리했습니다.

예시

:root  
--color-primary: #3692ff

이 방식의 장점

- 색상 관리 편리
- 유지보수성 향상
- 디자인 변경 시 전체 수정 가능

---

#### Google Analytics 적용

Google Analytics(GA4)를 적용하여

- 방문자 수
- 사용자 트래픽

을 확인할 수 있도록 설정했습니다.

---

#### 학습 내용

- 사용자 입력 UI 설계
- CSS 기반 인터랙션 구현
- CSS 변수 활용 방법
- 외부 서비스(GA4) 연동 경험
- 정적 페이지에서의 경로 관리

---

### 3️⃣ 3차 미션

#### 구현 목표

판다마켓 서비스의 **Article API와 Product API를 연동하여 CRUD 기능을 구현**했습니다.  
REST API를 활용하여 데이터를 조회, 생성, 수정, 삭제하는 기능을 구현하고  
비동기 처리 방식과 모듈화 구조를 학습하는 것을 목표로 했습니다.

---

#### 구현 내용

- Article API CRUD 기능 구현
- Product API CRUD 기능 구현
- fetch API를 이용한 HTTP 요청 처리
- 비동기 처리 방식 비교 (.then / async-await)
- API 요청 로직을 서비스 파일로 분리하여 코드 구조 개선

---

#### Article API 구현

Article 관련 데이터 처리는 **fetch와 then/catch 방식**을 사용하여 구현했습니다.

구현 함수

- getArticleList(page, pageSize, keyword)
- getArticle(articleId)
- createArticle({ title, content, image })
- patchArticle(articleId, data)
- deleteArticle(articleId)

각 함수는 API 문서를 참고하여  
HTTP 메서드와 request body를 맞게 구성하여 구현했습니다.

Article 목록 조회 시

- page
- pageSize
- keyword

쿼리 파라미터를 사용하여 데이터를 요청했습니다.

또한 API 요청 결과가 **정상 응답(2XX)**이 아닐 경우  
콘솔에 에러 메시지를 출력하도록 구현했습니다.

비동기 처리 방식

- then()
- catch()

---

#### Product API 구현

Product API는 **async / await 방식**으로 비동기 처리를 구현했습니다.

구현 함수

- getProductList(page, pageSize, keyword)
- getProduct(productId)
- createProduct({ name, description, price, tags, images })
- patchProduct(productId, data)
- deleteProduct(productId)

Product 생성 시 request body에는 다음 데이터가 포함됩니다.

- name
- description
- price
- tags
- images

비동기 처리 방식

- async
- await
- try
- catch

이를 통해 코드 가독성을 높이고  
에러 처리 구조를 명확하게 구현했습니다.

---

#### 파일 구조 분리 (모듈화)

API 관련 코드를 다음과 같이 파일로 분리했습니다.

ArticleService.js

- Article API 관련 함수 작성

ProductService.js

- Product API 관련 함수 작성

main.js

- API 함수 실행 및 테스트 코드 작성

export / import를 활용하여  
서비스 레이어와 실행 코드를 분리하는 구조로 구현했습니다.

---

#### API 동작 흐름

index.html  
↓  
main.js 실행  
↓  
Service 파일 import  
↓  
API 요청  
↓  
Response 처리  
↓  
Console 결과 출력

---

#### 테스트 방법

API 함수가 정상 동작하는지 확인하기 위해  
main.js에서 각 함수를 실행하고 브라우저 콘솔을 통해 결과를 확인했습니다.

브라우저에서

F12 → Console

을 통해 다음 결과를 확인할 수 있습니다.

![api-test](/images/readme-img/api-test.PNG)

---

#### 학습 내용

- REST API CRUD 구조 이해
- fetch API를 이용한 데이터 요청
- 비동기 처리 방식 이해
- then / catch와 async / await 비교
- 서비스 레이어 분리 구조 이해
- export / import를 활용한 모듈화

---

## 🛠 트러블슈팅 (Troubleshooting)

프로젝트를 진행하면서 발생했던 문제와 해결 과정을 정리했습니다.

---

### 1️⃣ 1차 미션 — 레이아웃 정렬 문제

#### 문제

Figma 디자인 시안을 기반으로 레이아웃을 구현하는 과정에서  
요소 간 간격과 정렬이 시안과 다르게 보이는 문제가 발생했습니다.

특히

- 이미지와 텍스트 정렬
- 카드형 레이아웃 간격
- 섹션 간 여백

에서 디자인과 차이가 발생했습니다.

#### 해결

Figma에서 제공하는

- margin
- padding
- 요소 간 간격

을 다시 확인하고 CSS 스타일을 수정했습니다.

또한 flexbox를 활용하여 레이아웃을 재구성했습니다.

#### 결과

디자인 시안과 거의 동일한 레이아웃을 구현할 수 있었고  
정렬 문제를 해결할 수 있었습니다.

---

### 2️⃣ 2차 미션 — 비밀번호 보기 기능 구현

#### 문제

로그인 페이지와 회원가입 페이지에서  
비밀번호 보기 기능을 구현할 때 JavaScript 없이 구현해야 했습니다.

처음에는 JavaScript로 구현하려 했지만  
미션 요구사항에서 **CSS 방식 구현**이 권장되었습니다.

#### 해결

checkbox와 CSS selector를 활용하여  
비밀번호 입력창의 타입을 변경하는 방식으로 구현했습니다.

구현 방식

checkbox → checked 상태  
→ CSS selector 적용  
→ password input 표시 변경

#### 결과

JavaScript 없이도  
비밀번호 보기 기능을 구현할 수 있었고  
CSS 기반 인터랙션 구현 방식을 이해할 수 있었습니다.

---

### 3️⃣ 3차 미션 — API 에러 처리 문제

#### 문제

API 요청을 구현하는 과정에서  
서버 응답이 실패했을 때에도 코드가 정상적으로 실행되는 문제가 발생했습니다.

즉

- 400
- 404
- 500

과 같은 에러가 발생해도 콘솔에서 오류가 명확하게 표시되지 않았습니다.

#### 해결

response 객체의 `ok` 값을 확인하여  
에러 발생 시 콘솔에 오류 메시지를 출력하도록 처리했습니다.

예시

if (!response.ok) {
console.error(response.status);
throw new Error(response.statusText);
}

#### 결과

API 요청 실패 시 콘솔에 에러 메시지가 출력되도록 개선되었고  
에러 상황을 빠르게 확인할 수 있게 되었습니다.

---

## ✨ 학습 내용

### 1차

- HTML 구조 설계
- UI 레이아웃 구현

### 2차

- CSS 변수 활용
- 인터랙션 구현
- Google Analytics 적용

### 3차

- REST API CRUD 구현
- 비동기 처리 방식 이해

비동기 방식 비교

- then / catch → Article API
- async / await → Product API

---

## 🚀 향후 계획

스프린트 미션을 통해 계속 확장 예정

- 4차 미션
- 5차 미션
- 6차 미션
- ...
- 11차 미션

---

## 📊 GitHub 통계

![GitHub stats](https://github-readme-stats.vercel.app/api?username=juengseulki&show_icons=true)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=juengseulki&layout=compact)

---

## 🎯 프로젝트 목표

- 마켓 서비스 UI 구현 경험
- REST API 이해
- 비동기 처리 방식 이해
- 코드 모듈화 경험
- 실제 CRUD 흐름 구현
