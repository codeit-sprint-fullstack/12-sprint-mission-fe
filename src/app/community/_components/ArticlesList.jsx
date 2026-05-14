"use client";

import ListCommunity from "@/app/components/ListCommunity";
import React, { useEffect, useState } from "react";
import icSearch from "../../../../public/icons/ic_search.png";
import icSortBtn from "../../../../public/icons/ic_btn_sort.png";
import Image from "next/image";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({
    keyword: "",
    orderby: "desc",
  });
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(values.keyword);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [values.keyword]);

  useEffect(() => {
    try {
      const fetchArticles = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/articles?keyword=${debouncedKeyword.trim()}&orderby=${values.orderby}`,
        );
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
  }, [debouncedKeyword, values.orderby]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <>
      <div className="flex justify-between gap-2">
        <div className="relative w-full">
          <Image
            src={icSearch}
            alt="검색 아이콘"
            className="absolute top-2 left-4"
          />
          <input
            type="text"
            name="keyword"
            value={values.keyword}
            onChange={handleChange}
            placeholder="검색할 상품을 입력해주세요"
            className="w-full h-[42px] pl-11 pr-3 bg-(--Secondary-100) rounded-xl text-lg"
          />
        </div>
        <select
          name="orderby"
          value={values.orderby}
          onChange={handleChange}
          className="hidden w-[130px] px-[20px] border-1 border-(--Secondary-200) bg-white rounded-xl md:block"
        >
          <option value="desc">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
        <Image
          src={icSortBtn}
          alt="정렬 버튼 아이콘"
          width={42}
          height={42}
          className="block shrink-0 md:hidden"
        />
      </div>
      <div className="flex flex-col gap-[24px]">
        {articles.map((article) => {
          return <ListCommunity key={article.id} article={article} />;
        })}
      </div>
    </>
  );
};

export default ArticlesList;
