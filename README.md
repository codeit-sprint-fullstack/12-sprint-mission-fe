# 🐼 판다마켓 (PandaMarket) Fe 프로젝트

<img width="396" height="132" alt="pm_logo" src="https://github.com/user-attachments/assets/93bd1dc7-79d5-44ea-a827-80e3d1ff71ee" />

### 판다마켓은 중고거래를 위한 커뮤니티 플랫폼입니다.

## ✨ 페이지 스크린샷

### 1. 데스크탑 ver
<img width="1920" height="1683" alt="데스크탑" src="https://github.com/user-attachments/assets/9377001d-a389-4e9e-80b5-89ed3851d016" />

### 2. 태블릿 ver
<img width="897" height="1759" alt="태블릿" src="https://github.com/user-attachments/assets/279bc7fe-f794-4618-8b49-a541acba2308" />

### 3. 모바일 ver
<img width="500" height="1679" alt="모바일" src="https://github.com/user-attachments/assets/9ae21c1f-034c-41d6-9d63-687ed4164531" />


## ✨ 주요 특징

### 1. 직관적인 컴포넌트 구조

- `GNB`(Global Navigation Bar), `UsedMarket`(메인 컨텐츠 영역), `Footer`로 구성된 깔끔한 레이아웃을 가집니다.
- 메인 마켓 영역은 베스트 상품(`BestProducts`)과 판매 중인 상품(`SellingProducts`) 섹션으로 명확히 구분되어 렌더링됩니다.

### 2. Custom Hooks

- **`useProducts`**: 상품 목록 조회, 키워드 검색, 정렬(`orderBy`) 등의 상품 관련 비즈니스 상태와 로직을 전담합니다.
- **`usePagination`**: 총 페이지 수를 기반으로 최대 5개 단위의 페이지 그룹을 계산하고 관리합니다.

### 3. 반응형 레이아웃

- `useWindowSize` 커스텀 훅을 통해 화면 너비를 감지하여 모바일(768px 미만), 태블릿(1280px 미만), 데스크탑 환경에 맞춘 UI를 제공합니다.
- 디바이스 환경에 따라 페이지당 렌더링되는 상품 목록의 개수와 배열이 동적으로 변경됩니다 (모바일: 4개(2열), 태블릿: 6개(3열), 데스크탑: 10개).

### 4. CSS

- `GNB.module.css`, `Footer.module.css`, `UsedMarket.module.css`, `SkeletonUI.module.css`로 각 기능에 필요한 CSS들을 모듈화하여 깔끔하게 정리했습니다.
