"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { signIn, saveTokens } from "@/lib/api/auth";
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
    setFieldErrors,
    isValid,
    submitError,
    setSubmitError,
    handleChange,
    getValidatedValues,
  } = useAuthForm({ email: "", password: "" }, validateLogin);

  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      saveTokens(data);
      router.replace("/items");
    },
    onError: (err) => {
      if (err.status >= 400 && err.status < 500) {
        // 4xx 에러: 인풋 아래 메시지
        setFieldErrors({
          email: "이메일을 확인해 주세요.",
          password: "비밀번호를 확인해 주세요.",
        });
      } else {
        // 그 외 에러 (네트워크, 500 등): 모달
        setSubmitError(err.message);
      }
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const validData = getValidatedValues();
    if (validData) {
      mutate(validData);
    }
  };

  return (
    <>
      <form
        noValidate
        onSubmit={onSubmit}
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
          loading={isPending}
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
