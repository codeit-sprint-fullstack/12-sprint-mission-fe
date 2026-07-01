"use client";

import { productService } from "@/lib/productService";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import Tag from "./Tag";
import icProfileLg from "@/assets/icons/ic_profile_lg.svg";
import icHeartMdInactive from "@/assets/icons/ic_favorite.png";
import { formatDate } from "@/utils/formatDate";
import imgDefault from "@/assets/images/product_img_default_md.png";
import DropdownList from "./DropdownList";
import { useGetProduct } from "@/hooks/useProducts";

const ItemDetail = ({ id }) => {
  // const {
  //   data: productData,
  //   isPending,
  //   error,
  // } = useQuery({
  //   queryKey: ["product", id],
  //   queryFn: () => productService.getItem(id),
  // });
  const { data: productData, isPending, error } = useGetProduct(id);

  const [imgError, setImgError] = useState(false);

  if (isPending) return <div>로딩중...</div>;

  if (error)
    return (
      <div className="py-10 text-center">데이터를 불러오는데 실패했습니다.</div>
    );

  const currentImgSrc = imgError
    ? imgDefault
    : productData?.images?.[0] || imgDefault;

  return (
    <div className="w-full flex flex-col pb-[24px] gap-[16px] border-b-1 border-(--Secondary-200) md:flex-row md:pb-[32px] md:gap-[24px]">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <Image
          src={currentImgSrc}
          alt="상품 이미지"
          fill
          sizes="(max-width: 743px) 50vw"
          onError={() => {
            setImgError(true);
          }}
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-[16px]">
        <section className="flex justify-between border-b pb-[16px] border-(--Secondary-200)">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold md:text-xl">
              {productData.name}
            </h2>
            <p className="text-2xl fond-semibold md:text-3xl">
              {Number(productData.price).toLocaleString()}원
            </p>
          </div>
          <DropdownList id={productData.id} type={"products"} />
        </section>
        <section className="pb-[8px] flex flex-col gap-2">
          <h3 className="text-lg font-semibold">상품 소개</h3>
          <p className="text-lg">{productData.description}</p>
        </section>
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">상품 태그</h3>
          <div className="flex gap-2">
            {productData.tags?.map((tag) => {
              return <Tag key={tag} tag={tag} />;
            })}
          </div>
        </section>
        <section className="pt-[24px] flex justify-between">
          <div className="flex items-center gap-[16px] pr-[16px]">
            <Image
              src={icProfileLg}
              alt="프로필 이미지"
              width={40}
              height={40}
            />
            <div>
              <p className="text-md text-(--Secondary-600)">
                {productData.ownerNickname}
              </p>
              <p className="text-md text-(--Secondary-400)">
                {formatDate(new Date(productData.createdAt))}
              </p>
            </div>
          </div>
          <div className="pl-[24px] flex items-center border-l border-(--Secondary-200)">
            <div className="px-[12px] py-[4px] flex gap-1 rounded-[32px] border-1 border-(--Secondary-200)">
              <Image
                src={icHeartMdInactive}
                alt="좋아요 아이콘"
                width={24}
                height={24}
              />
              <p>{productData.favoriteCount}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetail;
