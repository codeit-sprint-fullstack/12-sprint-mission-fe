"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import icKebab from "../../../public/icons/ic_kebab.png";
import Image from "next/image";
import Link from "next/link";

const DropdownList = ({ id, type }) => {
  const router = useRouter();
  const [isDrop, setIsDrop] = useState(false);
  let pathname;
  if (type === "products") {
    pathname = "/items";
  } else if (type === "articles") {
    pathname = "/community";
  }

  const deleteHandle = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${type}/${id}`,
        {
          method: "DELETE",
        },
      );
      if (!res.ok) {
        throw new Error("게시글 삭제에 실패했습니다");
      }

      if (type === "products") {
        router.replace("/items");
        return;
      } else if (type === "articles") {
        router.replace("/community");
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const dropdown = () => {
    return (
      <div className="absolute right-0 top-full mt-2 w-[102px] z-50 flex flex-col items-center justify-center text-md text-(--Secondary-500)">
        <Link
          href={`${pathname}}/${id}/edit`}
          className="w-full pt-[16px] pb-[12px] text-center bg-white rounded-t-lg  border-1 border-(--Secondary-300) hover:text-gray-900"
        >
          수정하기
        </Link>
        <button
          onClick={deleteHandle}
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
      {isDrop ? dropdown() : <></>}
    </div>
  );
};

export default DropdownList;
