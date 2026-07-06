"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import FormField from "@/app/(auth)/_components/FormField";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { userQueryKeys } from "@/constants/queryKeys";
import { login, signup } from "@/lib/api/auth.api";
import { signupSchema, type SignupValues } from "@/schemas/auth.schema";
import type { ApiError } from "@/types/api";

export default function SignupForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<SignupValues>({
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const {
    mutate,
    isPending,
    error: submitError,
    reset,
  } = useMutation<unknown, ApiError, SignupValues>({
    mutationFn: async (data) => {
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
    onError: (err) => {
      if (err.status === 409) {
        setError("email", { type: "server", message: err.message });
      }
    },
  });

  const isServerModalError = !!submitError && submitError.status !== 409;

  const onSubmit = (data: SignupValues) => mutate(data);

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 md:gap-6 w-full mb-6"
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormField
              id="email"
              type="email"
              label="이메일"
              placeholder="이메일을 입력해주세요"
              value={field.value}
              onChange={field.onChange}
              error={errors.email?.message}
              autoComplete="email"
            />
          )}
        />
        <Controller
          name="nickname"
          control={control}
          render={({ field }) => (
            <FormField
              id="nickname"
              type="text"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              value={field.value}
              onChange={field.onChange}
              error={errors.nickname?.message}
              autoComplete="username"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FormField
              id="password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              value={field.value}
              onChange={field.onChange}
              error={errors.password?.message}
              autoComplete="new-password"
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => (
            <FormField
              id="passwordConfirmation"
              type="password"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={field.value}
              onChange={field.onChange}
              error={errors.passwordConfirmation?.message}
              autoComplete="new-password"
            />
          )}
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
        isOpen={isServerModalError}
        onClose={reset}
        variant="danger"
        title={submitError?.message}
        confirmText="확인"
        onConfirm={reset}
      />
    </>
  );
}
