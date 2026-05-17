import Image from "next/image";
import React from "react";
import icProfile from "../../../public/icons/ic_profile_sm.svg";
import imgSeed from "../../../public/images/img_seed.png";
import icFavorite from "../../../public/icons/ic_favorite.png";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

const ListCommunity = ({ article }) => {
  return (
    <Link
      href={`/community/${article.id}`}
      className="pb-[24px] pt-[16px] px-[16px] flex flex-col gap-[16px] bg-(--background-gray) border-b-1 border-(--Secondary-200)"
    >
      <div className="flex justify-between gap-[8px]">
        <p className="text-xl font-semibold text-(--Secondary-800)">
          {article.title}
        </p>
        <div className="w-[72px] h-[72px] p-[12px] flex justify-center items-center rounded-md border-1 border-(--Secondary-200) bg-white shrink-0">
          <Image src={imgSeed} alt="상품 이미지" width={72} height={72} />
        </div>
      </div>
      <div className="flex justify-between items-center text-md">
        <div className="flex gap-2">
          <Image src={icProfile} alt="프로필 이미지" width={24} height={24} />
          <p className="text-(--Secondary-600)">총명한 판다</p>
          <p className="text-(--Secondary-400)">
            {formatDate(new Date(article.createdAt))}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <Image src={icFavorite} alt="좋아요" width={16} height={16} />
          <p className="text-(--Secondary-500)">9999+</p>
        </div>
      </div>
    </Link>
  );
};

export default ListCommunity;
