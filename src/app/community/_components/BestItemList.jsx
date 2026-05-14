"use client";

import BestItemCard from "@/app/components/BestItemCard";
import React, { useEffect, useState } from "react";

const BestItemList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchArticles = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
        if (!res.ok) {
          throw new Error("게시글 목록 조회에 실패했습니다.");
        }
        const { data } = await res.json();

        const filteredArticles = data.slice(0, 3);
        setArticles(filteredArticles);
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
    <div className="flex gap-[24px] overflow-hidden">
      {articles.map((article, index) => {
        let displayClass = "";
        if (index === 1) displayClass = "hidden md:block";
        if (index === 2) displayClass = "hidden xl:block";

        return (
          <div key={article.id} className={`w-full ${displayClass}`}>
            <BestItemCard article={article} />
          </div>
        );
      })}
    </div>
  );
};

export default BestItemList;
