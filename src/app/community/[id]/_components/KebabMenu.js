"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const itemClass =
  "flex items-center justify-center w-full h-[2.875rem] text-lg-regular text-gray-500 hover:bg-gray-100";

function KebabMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <Image src="/icons/ic-kebab.svg" width={24} height={24} alt="메뉴" />
      </button>

      {isOpen && (
        <div
          className="
            absolute right-0 top-8 w-[6.375rem] md:w-[8.6875rem] rounded-xl border border-gray-300 bg-white overflow-hidden z-10
          "
        >
          {children}
        </div>
      )}
    </div>
  );
}

KebabMenu.Button = function KebabButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={`${itemClass} pt-[0.75rem] pb-4`}>
      {children}
    </button>
  );
};

KebabMenu.Link = function KebabLink({ children, href }) {
  return (
    <Link href={href} className={`${itemClass} pb-[0.75rem] pt-4`}>
      {children}
    </Link>
  );
};

export default KebabMenu;
