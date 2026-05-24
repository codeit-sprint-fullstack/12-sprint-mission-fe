"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/axios";
import "../styles/mainheader.css";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();
  const currentPath = pathname?.toLowerCase() || "";
  const showNavPaths = ["/forum", "/items"];
  const shouldShowNav = showNavPaths.some((path) =>
    currentPath.startsWith(path),
  );

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setHasToken(!!localStorage.getItem("accessToken"));
  }, [pathname]);

  const { data: userData, isError } = useQuery({
    queryKey: ["userMe"],
    queryFn: async () => {
      const res = await api.get("/users/me");
      return res.data;
    },
    enabled: hasToken,
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("accessToken");
      setHasToken(false);
      queryClient.setQueryData(["userMe"], null);
      router.push("/signIn");
    }
  }, [isError, router, queryClient]);

  const handleLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("accessToken");
      setHasToken(false);
      queryClient.clear();
      router.push("/");
    }
  };

  const isLoggedIn = hasToken && userData;
  const nickname = userData?.nickname || "김코드";

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

          <div className="header__right">
            {isLoggedIn ? (
              <div className="header__profile">
                <div className="header__avatar-wrapper">
                  <Image
                    src="/images/user_icon.png"
                    alt="프로필 이미지"
                    width={40}
                    height={40}
                    className="header__avatar-img"
                    priority
                  />
                </div>
                <span className="header__nickname">{nickname}</span>
                <button
                  onClick={handleLogout}
                  className="header__logout-btn"
                  type="button"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <Link href="/signIn" className="header__login">
                로그인
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
