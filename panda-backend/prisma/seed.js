import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.article.createMany({
    data: [
      { title: "첫 번째 게시글", content: "첫번째 게시물입니다." },
      { title: "두 번째 게시글", content: "두번째 게시물입니다." },
      { title: "세 번째 게시글", content: "세번째 게시물입니다." },
      { title: "중고 거래 팁", content: "상태 확인을 꼭 하세요." },
    ],
  });

  console.log("시딩 완료!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
