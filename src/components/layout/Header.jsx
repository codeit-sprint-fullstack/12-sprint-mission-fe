"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const NAV_TABS = [
  { label: "자유게시판", href: "/community" },
  { label: "중고마켓", href: "/items" },
];

export const Header = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  const isActive = (href) => {
    if (href === "/community") {
      return pathname === "/community" || pathname === "/community/write";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 left-0 z-[100] h-[4.375rem] border-b border-gray-border bg-white">
      <div className="flex justify-between items-center w-full max-w-[120rem] h-full mx-auto px-4 md:px-6 xl:px-[12.5rem]">
        <div className="flex items-center gap-6 md:gap-2">
          <h1>
            <Link href="/">
              <div className="hidden md:block">
                <Image
                  src="/images/logo-full.svg"
                  alt="판다마켓"
                  width={153}
                  height={51}
                  priority
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/images/logo-typo.svg"
                  alt="판다마켓"
                  width={81}
                  height={27}
                  priority
                />
              </div>
            </Link>
          </h1>

          {!isRoot && (
            <nav>
              <ul className="flex gap-2 md:gap-0">
                {NAV_TABS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center text-gray-600 transition-colors
                        px-0 py-0 text-lg font-bold leading-none
                        md:px-[0.9375rem] md:py-[1.3125rem] md:text-2lg font-bold
                        hover:text-primary
                        ${isActive(href) ? "text-primary" : ""}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <Button href="/login">로그인</Button>
      </div>
    </header>
  );
};

export default Header;
