## 스프린트 미션6

## 📌 프로젝트 소개

향후 플랫폼 내 게시글, 댓글 기능 추가를 위해 Prisma 스키마 및 API 생성

## 🛠 사용 기술

- Frontend: React, React-Router-DOM
- Backend: Node.js, Express
- Database: PostgreSQL
- ORM: Prisma

## 🛠 사용 협업툴

- Git, Github

## 🚀 주요 기능

### Database Schema 파일 작성 (prisma/schema.prisma)

> 데이터베이스 구조를 정의

- Article, Comment 테이블 추가
- 댓글(Commnet) 테이블 내에 게시글(Article) 및 상품(Product) 외래키에 대한 삭제 옵션으로 Cascade 적용
- Postgre Free DB 1개만 생성가능 하여 타프로젝트와 분리하기 위해 Multi-Schema 설정 (판다마켓은 public 스키마)

### Article Seed Data 작성 (prisma/seed.js)

- PrismaClient를 사용하여 Article 테이블에 4개의 초기 더미데이터 작성
- Prisma 메소드를 활용

### Article, Comment 전용 CRUD API 작성 (index.js)

- Article(게시물): 등록, 조회, 상세조회, 수정, 삭제 API 작성
- Comment(댓글): 중고마켓 댓글, 게시판 댓글 등록, 수정, 삭제 API 작성

## ✔셀프 체크리스트

- 요구사항

1. 기본 요구사항

- 공통

- [x] PostgreSQL를 이용해 주세요.
- [x] 데이터 모델 간의 관계를 고려하여 onDelete를 설정해 주세요.
- [x] 데이터베이스 시딩 코드를 작성해 주세요.
- [x] 각 API에 적절한 에러 처리를 해 주세요.
- [x] 각 API 응답에 적절한 상태 코드를 리턴하도록 해 주세요.

- 자유게시판

- [x] Article 스키마를 작성해 주세요.
- [x] id, title, content, createdAt, updatedAt 필드를 가집니다.
- [x] 게시글 등록 API를 만들어 주세요.
- [x] title, content를 입력해 게시글을 등록합니다.
- [x] 게시글 조회 API를 만들어 주세요.
- [x] id, title, content, createdAt를 조회합니다.
- [x] 게시글 수정 API를 만들어 주세요.
- [x] 게시글 삭제 API를 만들어 주세요.
- [x] 게시글 목록 조회 API를 만들어 주세요.
- [x] id, title, content, createdAt를 조회합니다.
- [x] offset 방식의 페이지네이션 기능을 포함해 주세요.
- [x] 최신순(recent)으로 정렬할 수 있습니다.
- [x] title, content에 포함된 단어로 검색할 수 있습니다.

- 댓글

- [x] 댓글 등록 API를 만들어 주세요.
- [x] content를 입력하여 댓글을 등록합니다.
- [x] 중고마켓, 자유게시판 댓글 등록 API를 따로 만들어 주세요.
- [x] 댓글 수정 API를 만들어 주세요.
- [x] PATCH 메서드를 사용해 주세요.
- [x] 댓글 삭제 API를 만들어 주세요.
- [x] 댓글 목록 조회 API를 만들어 주세요.
- [x] id, content, createdAt 를 조회합니다.
- [x] cursor 방식의 페이지네이션 기능을 포함해 주세요.
- [x] 중고마켓, 자유게시판 댓글 목록 조회 API를 따로 만들어 주세요.
