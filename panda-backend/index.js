import express from "express"; // 웹서버 생성 핵심 프레임워크
import dotenv from "dotenv"; // .env 파일에 저장된 환경 변수 읽어오기
import cors from "cors"; // 프론트엔드에서 서버로 접속을 허용
import { PrismaClient } from "@prisma/client";

dotenv.config(); // 설정값 로드

const app = express(); // 익스프레스 객체 생성
const PORT = process.env.PORT || 8080;
const prisma = new PrismaClient();

app.use(cors()); // cors 다른 도메인 요청 허용
app.use(express.json()); //클라이언트가 보내는 JSON 데이터 해석 가능하게 함

// 상품 목록 조회 (페이지네이션, 검색, 정렬 포함)
app.get("/products", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1; // 기본값 1페이지
    const pageSize = Number(req.query.pageSize) || 10; // 한 페이지당 개수
    const keyword = req.query.keyword || ""; // 검색어
    const orderBy = req.query.orderBy || "recent"; // 정렬 순서

    const startproduct = (page - 1) * pageSize; // 페이지 별 시작 배열순서

    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: keyword, mode: "insensitive" } },
          { description: { contains: keyword, mode: "insensitive" } },
        ],
      },
      skip: startproduct, // 시작 배열
      take: pageSize, // 가져올 배열 사이즈
      orderBy: {
        createdAt: orderBy === "recent" ? "desc" : "asc", //recent면 최신순, oldest면 오래된순
      },
      select: {
        id: true,
        name: true,
        price: true,
        createdAt: true,
      },
    });

    res.status(200).json({
      list: products,
      currentPage: page,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "목록 조회 실패" });
  }
});

// 상품 등록 API
app.post("/products", async (req, res) => {
  const { name, description, price, tags } = req.body;
  if (!name || !description || !price)
    return res.status(400).json({ message: "필수 값이 누락되었습니다." });

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        tags,
        category: "기본",
      },
    });
    res.status(201).json(product);
  } catch (e) {
    console.error("❌ Prisma Create Error:", e);
    res.status(500).json({ error: "등록 실패", details: e.message });
  }
});

// 상세 조회
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });
  if (!product)
    return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
  res.json(product);
});

// 수정 (PATCH)
app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await prisma.product.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.status(200).json(updated);
  } catch (e) {
    res.status(400).json({ error: "수정 실패" });
  }
});

// 삭제
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.product.delete({ where: { id: Number(id) } });
  res.status(204).send(); // No Content
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 1. 게시글 등록
app.post("/articles", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "제목과 내용을 입력해주세요." });

  try {
    const article = await prisma.article.create({
      data: { title, content },
    });
    res.status(201).json(article);
  } catch (e) {
    res.status(500).json({ error: "게시글 등록 실패" });
  }
});

// 2. 게시글 목록 조회 (Offset 페이지네이션, 검색, 정렬)
app.get("/articles", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const keyword = req.query.keyword || "";
    const skip = (page - 1) * pageSize;

    const articles = await prisma.article.findMany({
      where: {
        OR: [
          { title: { contains: keyword, mode: "insensitive" } },
          { content: { contains: keyword, mode: "insensitive" } },
        ],
      },
      select: { id: true, title: true, content: true, createdAt: true },
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    });
    res.json(articles);
  } catch (e) {
    res.status(500).json({ error: "목록 조회 실패" });
  }
});

// 3. 게시글 상세 조회
app.get("/articles/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const article = await prisma.article.findUnique({
      where: { id: Number(id) },
      select: { id: true, title: true, content: true, createdAt: true },
    });
    if (!article)
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    res.json(article);
  } catch (e) {
    res.status(500).json({ error: "조회 실패" });
  }
});

// 4. 게시글 수정/삭제 (기존 PATCH/DELETE 로직과 유사하게 구현)
// ... (생략)

// --- 댓글 (Comment) API ---

// 1. 중고마켓 댓글 등록
app.post("/products/:productId/comments", async (req, res) => {
  const { productId } = req.params;
  const { content } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: { content, productId: Number(productId) },
    });
    res.status(201).json(comment);
  } catch (e) {
    res.status(500).json({ error: "댓글 등록 실패" });
  }
});

// 2. 자유게시판 댓글 등록
app.post("/articles/:articleId/comments", async (req, res) => {
  const { articleId } = req.params;
  const { content } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: { content, articleId: Number(articleId) },
    });
    res.status(201).json(comment);
  } catch (e) {
    res.status(500).json({ error: "댓글 등록 실패" });
  }
});

// 3. 댓글 목록 조회 (Cursor 페이지네이션)
app.get("/articles/:articleId/comments", async (req, res) => {
  const { articleId } = req.params;
  const cursor = req.query.cursor
    ? { id: Number(req.query.cursor) }
    : undefined;
  const take = Number(req.query.limit) || 5;

  try {
    const comments = await prisma.comment.findMany({
      where: { articleId: Number(articleId) },
      take,
      skip: cursor ? 1 : 0,
      cursor,
      orderBy: { id: "asc" },
      select: { id: true, content: true, createdAt: true },
    });
    res.json(comments);
  } catch (e) {
    res.status(500).json({ error: "댓글 조회 실패" });
  }
});

// 4. 댓글 수정 (PATCH)
app.patch("/comments/:id", async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const updated = await prisma.comment.update({
      where: { id: Number(id) },
      data: { content },
    });
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: "수정 실패" });
  }
});
