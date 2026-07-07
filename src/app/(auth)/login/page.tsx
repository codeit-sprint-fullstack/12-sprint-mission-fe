import type { Metadata } from "next";

import { AuthTemplate } from "@/features/auth/components/AuthTemplate";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const metadata: Metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <AuthTemplate
      heading="로그인"
      bottomText="판다마켓이 처음이신가요?"
      bottomLinkText="회원가입"
      bottomLinkHref="/signup"
    >
      <LoginForm />
    </AuthTemplate>
  );
}
