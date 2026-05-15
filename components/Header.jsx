"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const currentPath = pathname?.toLowerCase() || "";
  const showNavPaths = ["/forum", "/items"];
  const shouldShowNav = showNavPaths.some((path) =>
    currentPath.startsWith(path),
  );

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__container">
          <div className="header__left">
            <Link href="/" className="header__logo">
              <img src="/images/panda_icon.png" alt="판다마켓 로고" />
              <span className="logo__title">판다마켓</span>
            </Link>

            {shouldShowNav && (
              <div className="header__menu">
                <Link
                  href="/forum"
                  className={`header__menu-link ${currentPath.startsWith("/forum") ? "active" : ""}`}
                >
                  자유게시판
                </Link>
                <Link
                  href="/items"
                  className={`header__menu-link ${currentPath.startsWith("/items") ? "active" : ""}`}
                >
                  중고마켓
                </Link>
              </div>
            )}
          </div>

          <Link href="/login" className="header__login">
            로그인
          </Link>
        </div>
      </nav>
    </header>
  );
}
