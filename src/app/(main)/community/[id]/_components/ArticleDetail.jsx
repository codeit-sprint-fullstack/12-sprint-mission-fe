"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import icProfileLg from "@/assets/icons/ic_profile_lg.svg";
import icHeartMdInactive from "@/assets/icons/ic_heart_md_inactive.png";
import { formatDate } from "@/utils/formatDate";
import DropdownList from "@/app/components/DropdownList";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
        );
        if (!res.ok) {
          throw new Error("게시글 상세 조회에 실패했습니다.");
        }
        const { data } = await res.json();

        setArticle(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <div>
      <div>
        <div className="flex justify-between gap-2 flex-1">
          <h1 className="text-xl text-(--Secondary-800) font-bold min-w-0 break-all">
            {article.title}
          </h1>
          {/* <div className="shrink-0 w-[24px] h-[24px] cursor-pointer">
            <Image
              src={icKebab}
              alt="옵션 더보기"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div> */}
          <DropdownList id={id} article={article} />
        </div>
        <div className="py-[16px] flex border-b-1 border-(--Secondary-200)">
          <div className="flex items-center gap-[16px] pr-[16px] border-r-1 border-(--Secondary-200)">
            <Image
              src={icProfileLg}
              alt="프로필 이미지"
              width={40}
              height={40}
            />
            <p className="text-md text-(--Secondary-600)">총명한 판다</p>
            <p className="text-md text-(--Secondary-400)">
              {formatDate(new Date(article.createdAt))}
            </p>
          </div>
          <div className="pl-[16px] flex items-center">
            <div className="px-[12px] py-[4px] flex gap-1 rounded-[32px] border-1 border-(--Secondary-200)">
              <Image
                src={icHeartMdInactive}
                alt="좋아요 아이콘"
                width={24}
                height={24}
              />
              <p>123</p>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-[16px]">
        <p className="text-2lg text-(--Secondary-800)">{article.content}</p>
      </section>
    </div>
  );
};

export default ArticleDetail;
