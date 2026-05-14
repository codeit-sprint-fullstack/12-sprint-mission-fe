import Image from "next/image";
import React from "react";
import imgBadge from "../../../public/images/img_badge.svg";
import imgSeed from "../../../public/images/img_seed.png";
import icFavorite from "../../../public/icons/ic_favorite.png";
import { formatDate } from "@/utils/formatDate";

const BestItemCard = ({ article }) => {
  return (
    <div className="relative w-full px-[24px] pt-[46px] pb-[16px] rounded-lg bg-(--Secondary-100) flex flex-col justify-center md:w-[340px] xl:w-[384px]">
      <Image
        src={imgBadge}
        alt="베스트 뱃지"
        width={102}
        height={28}
        className="absolute top-0 w-[102px] h-[28px]"
      />
      <div className="flex flex-col gap-[40px] xl:gap-[18px]">
        <div className="flex gap-[40px] xl:gap-2">
          <p className="font-semibold text-2lg text-(--Secondary-800) xl:text-xl">
            {article.title}
          </p>
          <div className="w-[72px] h-[72px] p-[12px] flex justify-center items-center rounded-md border-1 border-(--Secondary-200) bg-white shrink-0">
            <Image src={imgSeed} alt="상품 이미지" width={72} height={72} />
          </div>
        </div>
        <div className="flex justify-between text-md">
          <div className="flex gap-2">
            <p className="text-(--Secondary-600)">총명한판다</p>
            <div className="flex gap-1 items-center">
              <Image src={icFavorite} alt="좋아요" width={16} height={16} />
              <p className="text-(--Secondary-500)">9999+</p>
            </div>
          </div>
          <p className="text-(--Secondary-400)">
            {formatDate(new Date(article.createdAt))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestItemCard;
