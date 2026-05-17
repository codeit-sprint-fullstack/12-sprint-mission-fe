"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="!sticky !top-0 !z-50 !h-[70px] !w-full !border-b !border-[#DFDFDF] !bg-white">
      <div className="!mx-auto !flex !h-full !w-full !max-w-[1200px] !items-center !justify-between !px-6">
        <div className="!flex !items-center !gap-10">
          <Link href="/" className="!block">
            <img
              src="/images/logo/logo.png"
              alt="판다마켓"
              className="!h-[40px] !w-auto !max-w-none !object-contain"
            />
          </Link>

          <nav>
            <ul className="!flex !items-center !gap-8">
              <li>
                <Link
                  href="/community"
                  className={`!text-base !font-semibold ${
                    pathname.startsWith("/community")
                      ? "!text-[#3692FF]"
                      : "!text-[#111827]"
                  }`}
                >
                  자유게시판
                </Link>
              </li>

              <li>
                <Link
                  href="/items"
                  className={`!text-base !font-semibold ${
                    pathname.startsWith("/items")
                      ? "!text-[#3692FF]"
                      : "!text-[#111827]"
                  }`}
                >
                  중고마켓
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link
          href="/login"
          className="!flex !h-[48px] !w-[88px] !items-center !justify-center !rounded-lg !bg-[#3692FF] !text-base !font-semibold !text-white"
        >
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
