"use client";

import { useRouter } from "next/navigation";
import useAuthForm from "@/hooks/useAuthForm";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { validateLogin } from "@/utils/validate";
import FormField from "@/app/(auth)/_components/FormField";

export default function LoginForm() {
  const router = useRouter();

  const {
    values,
    errors,
    isValid,
    isSubmitting,
    submitError,
    setSubmitError,
    handleChange,
    handleSubmit,
  } = useAuthForm({ email: "", password: "" }, validateLogin);

  return (
    <>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(async (values) => {
            //await updateArticle(post.id, values);
            router.replace(`/items`);
          });
        }}
        className="flex flex-col gap-4 md:gap-6 w-full mb-6"
      >
        <FormField
          id="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          autoComplete="email"
          value={values.email}
          onChange={(value) => handleChange("email", value)}
          error={errors.email}
        />
        <FormField
          id="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          autoComplete="current-password"
          value={values.password}
          onChange={(value) => handleChange("password", value)}
          error={errors.password}
        />

        <Button
          type="submit"
          size="lg"
          rounded="full"
          className="h-14"
          disabled={!isValid}
          loading={isSubmitting}
        >
          로그인
        </Button>
      </form>

      <Modal
        isOpen={!!submitError}
        onClose={() => setSubmitError(null)}
        variant="danger"
        title={submitError}
        confirmText="확인"
        onConfirm={() => setSubmitError(null)}
      />
    </>
  );
}
