"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/lib/AuthService";
import Modal from "@/components/common/CustomModal";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const password = watch("password");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      router.replace("/items");
    }
  }, [router]);

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/items");
    },
    onError: (error) => {
      setModalMessage(
        error.response?.data?.message || "회원가입에 실패했습니다.",
      );
    },
  });

  const onSubmit = (formData) => {
    if (!isValid || signUpMutation.isPending) return;

    signUpMutation.mutate({
      email: formData.email,
      nickname: formData.nickname,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirm,
    });
  };

  return (
    <div className="page">
      <main className="container" aria-label="회원가입">
        <header>
          <Link href="/" aria-label="판다마켓 홈으로 이동">
            <img
              className="logo"
              src="/images/logo/logo.png"
              alt="판다마켓 로고"
            />
          </Link>
        </header>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label" htmlFor="email">
              이메일
            </label>

            <input
              className={`input ${errors.email ? "input-error" : ""}`}
              id="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
              {...register("email", {
                required: "이메일을 입력해 주세요.",
              })}
            />

            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>

          <div className="field">
            <label className="label" htmlFor="nickname">
              닉네임
            </label>

            <input
              className={`input ${errors.nickname ? "input-error" : ""}`}
              id="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              {...register("nickname", {
                required: "닉네임을 입력해 주세요.",
              })}
            />

            {errors.nickname && (
              <p className="error-text">{errors.nickname.message}</p>
            )}
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              비밀번호
            </label>

            <div className="pw">
              <input
                className={`input pw__input ${
                  errors.password ? "input-error" : ""
                }`}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요"
                {...register("password", {
                  required: "비밀번호를 입력해 주세요.",
                })}
              />

              <button
                type="button"
                className="pw__eye"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="비밀번호 보기 전환"
              >
                <img
                  className={showPassword ? "block" : "hidden"}
                  src="/images/icons/eye.svg"
                  alt=""
                />
                <img
                  className={showPassword ? "hidden" : "block"}
                  src="/images/icons/eye-off.svg"
                  alt=""
                />
              </button>
            </div>

            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>

          <div className="field">
            <label className="label" htmlFor="passwordConfirm">
              비밀번호 확인
            </label>

            <div className="pw">
              <input
                className={`input pw__input ${
                  errors.passwordConfirm ? "input-error" : ""
                }`}
                id="passwordConfirm"
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
                {...register("passwordConfirm", {
                  required: "비밀번호 확인을 입력해 주세요.",
                  validate: (value) =>
                    value === password || "비밀번호가 일치하지 않아요.",
                })}
              />

              <button
                type="button"
                className="pw__eye"
                onClick={() => setShowPasswordConfirm((prev) => !prev)}
                aria-label="비밀번호 확인 보기 전환"
              >
                <img
                  className={showPasswordConfirm ? "block" : "hidden"}
                  src="/images/icons/eye.svg"
                  alt=""
                />
                <img
                  className={showPasswordConfirm ? "hidden" : "block"}
                  src="/images/icons/eye-off.svg"
                  alt=""
                />
              </button>
            </div>

            {errors.passwordConfirm && (
              <p className="error-text">{errors.passwordConfirm.message}</p>
            )}
          </div>

          <button
            className="login-btn"
            type="submit"
            disabled={!isValid || signUpMutation.isPending}
            style={{
              background:
                isValid && !signUpMutation.isPending ? "#3692FF" : "#9CA3AF",
            }}
          >
            {signUpMutation.isPending ? "가입 중..." : "회원가입"}
          </button>
        </form>

        <section className="social-box" aria-label="간편 로그인하기">
          <span>간편 로그인하기</span>

          <div className="social-icons">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img src="/images/social/google.svg" alt="구글" />
            </a>

            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/social/kakao.svg" alt="카카오" />
            </a>
          </div>
        </section>

        <p className="bottom-text">
          이미 회원이신가요? <Link href="/signin">로그인</Link>
        </p>
      </main>

      <Modal
        isOpen={Boolean(modalMessage)}
        message={modalMessage}
        confirmText="확인"
        onConfirm={() => setModalMessage("")}
      />
    </div>
  );
}
