"use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import icVisibleOff from "@/assets/icons/ic_visible_off.png";
import icVisibleOn from "@/assets/icons/ic_visible_on.png";
import Modal from "@/app/components/Modal";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useAuthActions";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const router = useRouter();

  const { mutate: handleSignIn } = useLogin();

  const onSubmit = (data) => {
    handleSignIn(
      { email: data.email, password: data.password },
      {
        onSuccess: (res) => {
          if (res.status !== 200) {
            setModalConfig({ isOpen: true, message: res.data.message });
            return;
          }
          router.replace("/");
          reset();
        },
        onError: (err) => {
          setModalConfig({ isOpen: true, message: err.message });
        },
      },
    );
  };

  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  const togglePassword = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px] md:gap-[24px]"
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
            autoComplete="email"
            className={`px-[24px] py-[16px] bg-(--Secondary-100) rounded-xl text-lg ${errors.email ? "border-2 border-(--error-red)" : ""}`}
          />
          {errors.email && (
            <p className="text-(--error-red)">{errors.email.message}</p>
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
              autoComplete="current-password"
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
        <Button as={"submit"} disabled={!isValid}>
          로그인
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

export default LoginForm;
