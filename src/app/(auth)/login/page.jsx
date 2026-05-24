import Image from "next/image";
import React from "react";
import logo from "@/assets/images/pandamarket_logo_lg.png";
import icGoogle from "@/assets/icons/ic_google.png";
import icKakaotalk from "@/assets/icons/ic_kakaotalk.png";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <main className="grow h-full flex flex-col justify-center items-center gap-[24px] mx-[16px] my-[80px] md:w-full md:max-w-[640px] md:mx-auto md:gap-[40px]">
      <Link
        href="/"
        className="relative block w-[198px] h-[66px] md:w-[396px] md:h-[132px]"
      >
        <Image
          src={logo}
          alt="판다마켓 로고"
          fill
          className="object-contain"
          sizes="(max-width: 743px) 198px, 396px"
        />
      </Link>
      <section className="w-full flex flex-col gap-[24px] justify-center items-center">
        <div className="w-full">
          <LoginForm />
        </div>
        <div className="px-[24px] py-[16px] w-full flex justify-between items-center bg-(--background-blue) rounded-lg">
          <p className="text-lg text-(--Secondary-800)">간편 로그인하기</p>
          <div className="flex gap-2">
            <Link href="https://www.google.com" className="cursor-pointer">
              <Image
                src={icGoogle}
                alt="구글 아이디 로그인"
                className="object-contain"
              />
            </Link>
            <Link
              href="https://www.kakaocorp.com/page"
              className="flex justify-center pt-[10px] py-[8px] w-[42px] h-[42px] bg-[#F5E14B] rounded-full cursor-pointer"
            >
              <Image
                src={icKakaotalk}
                alt="카카오톡 아이디 로그인"
                className="object-contain"
              />
            </Link>
          </div>
        </div>
        <p className="text-md text-(--Secondary-800)">
          판다마켓이 처음이신가요?{" "}
          <Link href="/register" className="text-(--Brand-blue) underline">
            회원가입
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
