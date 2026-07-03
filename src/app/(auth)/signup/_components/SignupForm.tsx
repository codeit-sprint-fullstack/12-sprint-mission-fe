"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import FormField from "@/app/(auth)/_components/FormField";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { userQueryKeys } from "@/constants/queryKeys";
import { useAuthForm } from "@/hooks/useAuthForm";
import { login, signup } from "@/lib/api/auth.api";
import type { ApiError } from "@/types/api";
import type { SignupValues } from "@/types/auth";
import { validateSignup } from "@/utils/validate";

export default function SignupForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    values,
    errors,
    setFieldErrors,
    isValid,
    submitError,
    setSubmitError,
    handleChange,
    getValidatedValues,
  } = useAuthForm<SignupValues>(
    {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
    },
    validateSignup,
  );

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SignupValues) => {
      // 회원가입은 계정만 만들고 쿠키를 안 심어주므로, 곧바로 로그인까지 이어서 처리
      await signup({
        email: data.email,
        nickname: data.nickname,
        password: data.password,
      });
      return login({ email: data.email, password: data.password });
    },

    onSuccess: (user) => {
      queryClient.setQueryData(userQueryKeys.me(), user);
      router.replace("/items");
    },

    onError: (err: ApiError) => {
      if (err.status === 409) {
        setFieldErrors({ email: err.message });
      } else {
        setSubmitError(err.message);
      }
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validData = getValidatedValues();

    // 유효성 검증을 통과한 경우 서버에 전달
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
          loading={isPending}
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
