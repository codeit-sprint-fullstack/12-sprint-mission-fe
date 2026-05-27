"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/pandamarket_logo.png";
import logoMobile from "../../../public/images/pandamarket_logo_mobile.png";
import NavLink from "./NavLink";
import { useAuth } from "@/providers/AuthProvider";
import icProfile from "@/assets/icons/ic_profile_lg.svg";

const GNB = () => {
  const { user } = useAuth();

  return (
    <header className="border-b-1 border-(--border-gray) bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center h-[70px] mx-[16px] md:mx-[24px] xl:mx-[200px]">
        <div className="flex items-center gap-[16px] md:gap-[20px] xl:gap-[32px]">
          <Link href="/">
            <Image
              src={logoMobile}
              alt="판다마켓 로고"
              width={81}
              height={27}
              className="md:hidden"
            />
            <Image
              src={logo}
              alt="판다마켓 로고"
              width={153}
              height={51}
              className="hidden md:block"
            />
          </Link>
          <div className="flex gap-5 text-(--Secondary-600) font-bold text-lg md:text-2lg">
            <NavLink href={"/community"}>자유게시판</NavLink>
            <NavLink href={"/items"}>중고마켓</NavLink>
          </div>
        </div>
        {user ? (
          <div className="flex gap-2 items-center">
            <Image
              src={user.image ? user.image : icProfile}
              alt="프로필 이미지"
              width={40}
              height={40}
            />
            <p className="text-2lg text-(--Secondary-600)">{user.nickname}</p>
          </div>
        ) : (
          <Link
            href="/login"
            className="h-[42px] px-[23px] flex justify-center items-center text-lg font-semibold text-white bg-(--Primary-100) rounded-lg hover:bg-(--Primary-200)"
          >
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default GNB;
