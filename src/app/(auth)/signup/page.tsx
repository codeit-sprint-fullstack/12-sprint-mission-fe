import type { Metadata } from "next";

import { AuthTemplate } from "@/features/auth/components/AuthTemplate";
import { SignupForm } from "@/features/auth/components/SignupForm";

export const metadata: Metadata = {
  title: "회원가입",
};

export default function SignupPage() {
  return (
    <div className="flex justify-center w-full pt-6 md:pt-12 lg:pt-[3.75rem] pb-[11rem] md:pb-[15rem] lg:pb-[11rem]">
      <AuthTemplate
        heading="회원가입"
        bottomText="이미 회원이신가요?"
        bottomLinkText="로그인"
        bottomLinkHref="/login"
      >
        <SignupForm />
      </AuthTemplate>
    </div>
  );
}
