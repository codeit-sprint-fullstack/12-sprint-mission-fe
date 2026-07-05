import React from "react";
import ArticleDetail from "./_components/ArticleDetail";
import ArticleComment from "./_components/ArticleComment";

const ArticleDetailPage = () => {
  return (
    <div className="w-full max-w-[1200px] h-full mx-auto px-[15px] my-[24px] flex flex-col gap-[32px] grow md:gap-[40px]">
      <ArticleDetail />
      <ArticleComment />
    </div>
  );
};

export default ArticleDetailPage;
