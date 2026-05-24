"use client";

import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import React, { useState } from "react";
import icVisibleOff from "@/assets/icons/ic_visible_off.png";
import icVisibleOn from "@/assets/icons/ic_visible_on.png";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { fetchSignUp } from "@/lib/fetchData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/providers/AuthProvider";

const RegisterForm = () => {
  const { signUp } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
  });
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: handleSignUp } = useMutation({
    mutationFn: ({ email, nickname, password, passwordConfirmation }) =>
      signUp(email, nickname, password, passwordConfirmation),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["signUp"] });
      if (res.status !== 201) {
        setModalConfig({
          isOpen: true,
          message: res.data.message,
        });
        return;
      }
      router.replace("/items");
      reset();
    },
  });

  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  const onSubmit = (data) => {
    handleSignUp({
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
    });
  };

  const togglePassword = () => setIsVisible((prev) => !prev);
  const toggleConfirmPassword = () => setIsConfirmVisible((prev) => !prev);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[16px] md:gap-[24px]"
      >
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-(--Secondary-800) md:text-2lg">
            이메일
          </label>
          <input
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "이메일 형식이 아닙니다",
              },
            })}
            placeholder="이메일을 입력해주세요"
            className={`px-[24px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg ${errors.email ? "border-2 border-(--error-red)" : ""}`}
          />
          {errors.email && (
            <p className="text-(--error-red)">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-(--Secondary-800) md:text-2lg">
            닉네임
          </label>
          <input
            {...register("nickname", {
              required: "닉네임을 입력해주세요",
              minLength: {
                value: 2,
                message: "2자 이상 입력해주세요",
              },
              maxLength: {
                value: 10,
                message: "10자 이하로 입력해주세요",
              },
            })}
            placeholder="닉네임을 입력해주세요"
            className={`px-[24px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg ${errors.nickname ? "border-2 border-(--error-red)" : ""}`}
          />
          {errors.nickname && (
            <p className="text-(--error-red)">{errors.nickname.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-(--Secondary-800) md:text-2lg">
            비밀번호
          </label>
          <div className="relative">
            <input
              type={isVisible ? "text" : "password"}
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이어야 합니다",
                },
              })}
              placeholder="비밀번호를 입력해주세요"
              className={`w-full pl-[24px] pr-[52px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg ${errors.password ? "border-2 border-(--error-red)" : ""}`}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            >
              <Image
                src={isVisible ? icVisibleOn : icVisibleOff}
                alt="비밀번호 토글 버튼"
              />
            </button>
          </div>
          {errors.password && (
            <p className="text-(--error-red)">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-(--Secondary-800) md:text-2lg">
            비밀번호 확인
          </label>
          <div className="relative">
            <input
              type={isConfirmVisible ? "text" : "password"}
              {...register("passwordConfirmation", {
                required: "비밀번호를 다시 한 번 입력해주세요",
                validate: (value) =>
                  value === getValues("password") ||
                  "비밀번호가 일치하지 않습니다",
              })}
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              className={`w-full pl-[24px] pr-[52px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg ${errors.passwordConfirmation ? "border-2 border-(--error-red)" : ""}`}
            />
            <button
              type="button"
              onClick={toggleConfirmPassword}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
            >
              <Image
                src={isConfirmVisible ? icVisibleOn : icVisibleOff}
                alt="비밀번호 토글 버튼"
              />
            </button>
          </div>
          {errors.passwordConfirmation && (
            <p className="text-(--error-red)">
              {errors.passwordConfirmation.message}
            </p>
          )}
        </div>
        <Button as={"submit"} disabled={!isValid}>
          회원가입
        </Button>
      </form>
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        message={modalConfig.message}
      />
    </>
  );
};

export default RegisterForm;
