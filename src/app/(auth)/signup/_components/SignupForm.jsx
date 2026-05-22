"use client";

import { useRouter } from "next/navigation";
import useAuthForm from "@/hooks/useAuthForm";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { validateSignup } from "@/utils/validate";
import FormField from "@/app/(auth)/_components/FormField";

export default function SignupForm() {
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
  } = useAuthForm(
    {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
    },
    validateSignup,
  );

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
          value={values.email}
          onChange={(value) => handleChange("email", value)}
          error={errors.email}
          autoComplete="email"
        />
        <FormField
          id="nickname"
          type="text"
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          value={values.nickname}
          onChange={(value) => handleChange("nickname", value)}
          error={errors.nickname}
          autoComplete="username"
        />
        <FormField
          id="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={values.password}
          onChange={(value) => handleChange("password", value)}
          error={errors.password}
          autoComplete="new-password"
        />
        <FormField
          id="passwordConfirmation"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          value={values.passwordConfirmation}
          onChange={(value) => handleChange("passwordConfirmation", value)}
          error={errors.passwordConfirmation}
          autoComplete="new-password"
        />

        <Button
          type="submit"
          size="lg"
          rounded="full"
          className="h-14"
          disabled={!isValid}
          loading={isSubmitting}
        >
          회원가입
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
