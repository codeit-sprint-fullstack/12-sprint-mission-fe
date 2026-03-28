# 🐼 판다마켓 (Panda Market)

> React + Vite로 구현한 중고 거래 플랫폼 프론트엔드

---

## 📖 프로젝트 소개

판다마켓은 중고 상품을 검색하고 탐색할 수 있는 마켓 플레이스 웹 애플리케이션입니다.
반응형 레이아웃을 지원하며, 상품 검색 · 정렬 · 페이지네이션 기능을 제공합니다.

---

## 🛠️ 기술 스택

| 분류       | 기술             |
| ---------- | ---------------- |
| 프레임워크 | React 18         |
| 빌드 도구  | Vite 5           |
| 스타일링   | CSS Modules      |
| API 통신   | Fetch API        |
| 폰트       | Pretendard (CDN) |

---

## 📁 프로젝트 구조

```
panda-market/
├── public/
│   └── icons/              # SVG 아이콘 (로고, 소셜, 화살표 등)
├── src/
│   ├── api/
│   │   └── products.js     # API 통신 함수 (상품 목록, 베스트 상품)
│   ├── hooks/
│   │   ├── useResponsive.js    # 뷰포트 반응형 커스텀 훅
│   │   ├── useBestProducts.js  # 베스트 상품 데이터 훅
│   │   └── useProducts.js      # 전체 상품 상태관리 훅
│   ├── pages/
│   │   └── MarketPage.jsx  # 마켓 메인 페이지
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx       # 상단 네비게이션 바
│   │   │   └── Footer.jsx       # 하단 푸터
│   │   └── market/
│   │       ├── BestProducts.jsx     # 베스트 상품 섹션
│   │       ├── AllProducts.jsx      # 전체 상품 섹션
│   │       ├── ProductCard.jsx      # 상품 카드 컴포넌트
│   │       ├── Pagination.jsx       # 페이지네이션
│   │       └── SortDropdown.jsx     # 정렬 드롭다운
│   ├── styles/
│   │   └── global.css      # 전역 CSS
│   ├── App.jsx             # 루트 레이아웃 컴포넌트
│   └── main.jsx            # React 앱 진입점
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ 설치 및 실행

### 요구 사항

- Node.js 18 이상
- npm

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd panda-market

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속합니다.

### 빌드

```bash
npm run build
```

### 빌드 결과 미리보기

```bash
npm run preview
```

---

## 🔌 API

베이스 URL: `https://panda-market-api.vercel.app`

| 메서드 | 엔드포인트  | 설명           |
| ------ | ----------- | -------------- |
| GET    | `/products` | 상품 목록 조회 |

### 쿼리 파라미터

| 파라미터   | 타입                       | 기본값     | 설명             |
| ---------- | -------------------------- | ---------- | ---------------- |
| `page`     | number                     | 1          | 페이지 번호      |
| `pageSize` | number                     | 10         | 페이지당 항목 수 |
| `orderBy`  | `'recent'` \| `'favorite'` | `'recent'` | 정렬 기준        |
| `keyword`  | string                     | -          | 검색 키워드      |

### 응답 형식

```json
{
  "list": [...],
  "totalCount": 100
}
```

---

## 📱 반응형 브레이크포인트

| 뷰포트  | 범위           | 베스트 상품 | 전체 상품 |
| ------- | -------------- | ----------- | --------- |
| Mobile  | ≤ 767px        | 1개         | 4개       |
| Tablet  | 768px ~ 1199px | 2개         | 6개       |
| Desktop | ≥ 1200px       | 4개         | 10개      |

---

## 🧩 주요 기능

### 베스트 상품

- 좋아요 순 상위 상품을 화면 크기에 맞게 표시
- 로딩 중 스켈레톤 UI 표시

### 전체 상품

- **검색**: 키워드 입력 후 엔터 또는 버튼 클릭으로 검색
- **정렬**: 최신순 / 좋아요순 드롭다운 선택
- **페이지네이션**: 슬라이딩 윈도우 방식 (최대 5개 번호 표시)
- 로딩 중 스켈레톤 UI 표시

### 커스텀 훅 구조

```
useResponsive()          → 현재 뷰포트 ('mobile' | 'tablet' | 'desktop')
  ├─ useBestPageSize()   → 베스트 상품 pageSize 반환
  └─ useProductPageSize()→ 전체 상품 pageSize 반환

useBestProducts(pageSize)→ { bestProducts, loading, error }
useProducts({ pageSize })→ { products, totalPages, page, orderBy, ... }
```

---

👩‍💻 제작자 정민
