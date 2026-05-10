"use client";

import Image from "next/image";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex flex-1 items-center">
      <Image
        src="/icons/ic-search.svg"
        width={15}
        height={15}
        alt="검색"
        className="absolute left-4 w-6 h-6"
      />
      <input
        type="text"
        name="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="검색할 상품을 입력해주세요"
        className="
          flex-1 gap-2.5 w-[20.3125rem] h-[2.625rem] pl-11 pr-5 rounded-xl bg-gray-100 text-lg-regular
          placeholder:text-gray-400
          focus:border focus:border-primary focus:text-gray-800
        "
      />
    </div>
  );
}
