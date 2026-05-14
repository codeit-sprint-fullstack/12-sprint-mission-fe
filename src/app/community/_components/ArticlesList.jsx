"use client";

import ListCommunity from "@/app/components/ListCommunity";
import React, { useEffect, useState } from "react";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchArticles = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
        if (!res.ok) {
          throw new Error("게시글 목록 조회에 실패했습니다.");
        }
        const result = await res.json();

        setArticles(result.data);
      };

      fetchArticles();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <div className="flex flex-col gap-[24px]">
      {articles.map((article) => {
        return <ListCommunity key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticlesList;
