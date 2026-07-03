import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import SocialLogin from "./SocialLogin";

type AuthTemplateProps = {
  children: ReactNode;
  heading: string;
  bottomText: string;
  bottomLinkText: string;
  bottomLinkHref: string;
};

export default function AuthTemplate({
  children,
  heading,
  bottomText,
  bottomLinkText,
  bottomLinkHref,
}: AuthTemplateProps) {
  return (
    <div className="flex flex-col items-center w-full max-w-[40rem]">
      <h1>
        <Link href="/">
          <Image
            src="/images/logo-full.svg"
            alt="판다마켓"
            width={396}
            height={132}
            className="w-[198px] h-[66px] md:w-[396px] md:h-[132px] mb-6 md:mb-10"
            loading="eager"
          />
        </Link>
      </h1>

      <h2 className="sr-only">{heading}</h2>

      {children}

      <SocialLogin />

      <p className="flex items-center gap-1 text-md font-medium text-gray-800">
        <span>{bottomText}</span>
        <Link href={bottomLinkHref} className="text-primary underline">
          {bottomLinkText}
        </Link>
      </p>
    </div>
  );
}
