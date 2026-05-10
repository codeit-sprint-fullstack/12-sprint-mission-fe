"use client";

import Image from "next/image";

export default function SortSelect({ value, onChange }) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-[2.625rem] w-[2.625rem] px-[0.56rem] rounded-xl border border-gray-200 bg-white appearance-none cursor-pointer text-transparent
          md:w-[8.125rem] md:px-5 md:text-current md:text-gray-900
        "
      >
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>

      <Image
        src="/icons/ic-arrow.svg"
        width={16}
        height={8}
        alt=""
        aria-hidden="true"
        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
      />
      <Image
        src="/icons/ic-sort.svg"
        width={24}
        height={24}
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:hidden"
      />
    </div>
  );
}
