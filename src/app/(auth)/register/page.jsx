import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/pandamarket_logo_lg.png";
import RegisterForm from "./_components/RegisterForm";

const RegisterPage = () => {
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
        <RegisterForm />
      </section>
    </main>
  );
};

export default RegisterPage;
