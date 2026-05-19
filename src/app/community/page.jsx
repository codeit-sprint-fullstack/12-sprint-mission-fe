import React from "react";

import BestItemList from "./_components/BestItemList";
import ArticlesList from "./_components/ArticlesList";
import Button from "../components/Button";

const CommunityPage = () => {
  return (
    <div className="flex grow flex-col items-center my-[24px]">
      <main className="flex flex-col mx-[16px] md:mx-[24px] xl:w-full max-w-[1200px] h-full mx-auto gap-[40px]">
        <section className="flex flex-col gap-[24px]">
          <h2 className="text-xl font-bold text-(--Secondary-900)">
            베스트 게시글
          </h2>
          <BestItemList />
        </section>
        <section className="flex flex-col gap-[24px]">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-(--Secondary-900)">게시글</h2>
            <Button href={"/community/create"} as={"Link"}>
              글쓰기
            </Button>
          </div>
          <ArticlesList />
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
