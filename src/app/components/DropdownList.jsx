"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import icKebab from "../../../public/icons/ic_kebab.png";
import Image from "next/image";
import Link from "next/link";

const DropdownList = ({ id }) => {
  const router = useRouter();
  const [isDrop, setIsDrop] = useState(false);

  const deleteArticle = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`,
        {
          method: "DELETE",
        },
      );
      if (!res.ok) {
        throw new Error("게시글 삭제에 실패했습니다");
      }

      router.push("/community");
    } catch (error) {
      console.error(error.message);
    }
  };

  const articleDropdownList = () => {
    return (
      <div className="absolute right-0 top-full mt-2 w-[102px] z-50 flex flex-col items-center justify-center text-md text-(--Secondary-500)">
        <Link
          href={`/community/${id}/edit`}
          className="w-full pt-[16px] pb-[12px] text-center bg-white rounded-t-lg  border-1 border-(--Secondary-300) hover:text-gray-900"
        >
          수정하기
        </Link>
        <button
          onClick={deleteArticle}
          className="w-full pt-[12px] pb-[16px] text-center bg-white rounded-b-lg  border-l-1 border-r-1 border-b-1 border-(--Secondary-300) cursor-pointer hover:text-gray-900"
        >
          삭제하기
        </button>
      </div>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsDrop((prev) => !prev);
        }}
        className="shrink-0 w-[24px] h-[24px] cursor-pointer"
      >
        <Image
          src={icKebab}
          alt="옵션 더보기"
          width={24}
          height={24}
          className="w-full h-full object-contain"
        />
      </button>
      {isDrop ? articleDropdownList() : <></>}
    </div>
  );
};

export default DropdownList;
