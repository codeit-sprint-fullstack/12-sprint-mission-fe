"use client";

import Image from "next/image";
import type { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative flex flex-1 items-center">
      <Image
        src="/icons/ic-search.svg"
        width={15}
        height={15}
        alt=""
        aria-hidden="true"
        className="absolute left-4 w-6 h-6"
      />
      <input
        type="text"
        aria-label="검색"
        name="search"
        value={value}
        onChange={handleChange}
        placeholder="검색할 상품을 입력해주세요"
        className="
          flex-1 gap-2.5 w-[20.3125rem] h-[2.625rem] pl-11 pr-5 rounded-xl bg-gray-100 text-lg
          placeholder:text-gray-400
          focus:outline-none focus:ring focus:ring-primary focus:ring-2
        "
      />
    </div>
  );
}
