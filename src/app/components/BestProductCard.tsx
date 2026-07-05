"use client";

import Image from "next/image";
import React, { useState } from "react";
import icHeartInactive from "@/assets/icons/ic_heart_md_inactive.png";
import imgDefault from "@/assets/images/product_img_default_md.png";
import type { Product } from "../../types";

const BestProductCard = ({ product }: { product: Product }) => {
  const [imgError, setImgError] = useState(false);
  const currentImgSrc = imgError
    ? imgDefault
    : product?.images?.[0] || imgDefault;
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <Image
          src={currentImgSrc}
          alt="상품 이미지"
          fill
          sizes="(max-width: 743px) 50vw, (max-width: 1199px) 33vw, 20vw"
          onError={() => {
            setImgError(true);
          }}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-md font-semibold text-(--Secondary-800)">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-(--Secondary-800)">
          {product.price}원
        </p>
        <div className="flex gap-1 items-center">
          <Image
            src={icHeartInactive}
            alt="좋아요 아이콘"
            width={16}
            height={16}
            className="object-cover w-[16px] h-[16px]"
          />
          <p className="text-xs text-(--Secondary-600)">
            {product.favoriteCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestProductCard;
