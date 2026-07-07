"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { userQueryKeys } from "@/constants/queryKeys";
import { login } from "@/features/auth/api";
import { FormField } from "@/features/auth/components/FormField";
import { loginSchema, type LoginValues } from "@/features/auth/schema";
import type { ApiError } from "@/types/api";

export function LoginForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginValues>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const {
    mutate,
    isPending,
    error: submitError,
    reset,
  } = useMutation<unknown, ApiError, LoginValues>({
    mutationFn: (data) => login(data),
    onSuccess: (user) => {
      queryClient.setQueryData(userQueryKeys.me(), user);
      router.replace("/items");
    },
    onError: (err) => {
      if (err.status && err.status >= 400 && err.status < 500) {
        setError("password", {
          type: "server",
          message:
            "이메일 또는 비밀번호가 올바르지 않습니다. 입력한 정보를 확인한 후 다시 시도해 주세요.",
        });
      }
    },
  });

  const isServerModalError = !!submitError && submitError.status! >= 500;

  const onSubmit = (data: LoginValues) => mutate(data);

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
              autoComplete="email"
              value={field.value}
              onChange={field.onChange}
              error={errors.email?.message}
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
              autoComplete="current-password"
              value={field.value}
              onChange={field.onChange}
              error={errors.password?.message}
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
          로그인
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
