🐼 판다마켓 (Pandamarket) - Sprint 3
일상의 모든 물건을 거래하는 중고 거래 플랫폼의 Article 및 Product API 연동 프로젝트

📌 프로젝트 소개
판다마켓 서비스의 핵심 데이터인 **게시글(Article)**과 상품(Product) 데이터를 관리하기 위해 외부 API와 통신하는 서비스 로직을 구현한 프로젝트입니다. 자바스크립트의 두 가지 주요 비동기 처리 방식인 Promise(.then)와 async/await을 모두 사용하여 설계되었습니다.

🛠️ 기술 스택
JavaScript (ES6+)

Fetch API

Node.js (테스트 환경)

📂 프로젝트 구조
Plaintext
sprint3/
├── src/
│ ├── api/
│ │ ├── ArticleService.js # .then() / .catch() 기반 서비스
│ │ └── ProductService.js # async / await 기반 서비스
│ └── main.js # 서비스 실행 및 API 테스트
├── package.json # 프로젝트 설정 및 의존성 관리
└── README.md
⚙️ 주요 기능 및 구현 방식
1️⃣ Article Service (.then() 방식)
명세서 요구사항에 따라 Promise 체이닝 방식을 사용하여 구현되었습니다.

목록 조회: page, pageSize, orderBy, keyword 쿼리 파라미터 적용

CRUD 구현: 상세 조회, 생성(POST), 수정(PATCH), 삭제(DELETE)

에러 핸들링: .catch() 블록을 통해 네트워크 오류 및 상태 코드(2XX 아님) 예외 처리

2️⃣ Product Service (async/await 방식)
가독성이 높은 현대적 비동기 문법을 사용하여 구현되었습니다.

목록 조회: 정렬 기준(recent, favorite)을 포함한 상품 데이터 호출

CRUD 구현: 상품 등록, 상세 정보 수신, 정보 업데이트, 상품 제거

에러 핸들링: try-catch 문을 사용하여 비동기 로직의 안정성 확보

3️⃣ 공통 구현 포인트
URLSearchParams: 복잡한 쿼리 스트링을 객체 기반으로 안전하게 생성

Request Headers: JSON 데이터 전송을 위한 Content-Type: application/json 명시

Error Validation: response.ok를 체크하여 HTTP 에러 상태(4xx, 5xx)를 명시적으로 처리

🎨 코드 예시
[Product List 조회 - async/await]
JavaScript
export const getProductList = async (page = 1, pageSize = 10, orderBy = "recent", keyword = "") => {
try {
const params = new URLSearchParams({ page, pageSize, orderBy, keyword });
const response = await fetch(`${BASE_URL}?${params.toString()}`);

    if (!response.ok) throw new Error(`목록 조회 실패: ${response.status}`);
    return await response.json();

} catch (error) {
console.error(error.message);
}
};
🚀 실행 방법
프로젝트 폴더로 이동

Bash
cd sprint3
의존성 설치 (필요시)

Bash
npm install
테스트 실행

Bash
npm start
👩‍💻 제작자
정민
