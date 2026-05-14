import React from "react";

import BestItemList from "./_components/BestItemList";
import ArticlesList from "./_components/ArticlesList";

const CommunityPage = () => {
  return (
    <div className="flex flex-col items-center my-[24px]">
      <main className="flex flex-col mx-[16px] md:mx-[24px] xl:w-[1200px] gap-[40px]">
        <section className="flex flex-col gap-[24px]">
          <h2 className="text-xl font-bold text-(--Secondary-900)">
            베스트 게시글
          </h2>
          <BestItemList />
        </section>
        <section className="flex flex-col gap-[24px]">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-(--Secondary-900)">게시글</h2>
            <button className="text-lg font-semibold text-white text-center rounded-lg bg-(--Primary-100) px-[23px] py-[8px]">
              글쓰기
            </button>
          </div>
          <ArticlesList />
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
