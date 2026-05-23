"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/lib/AuthService";
import Modal from "@/components/common/CustomModal";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      router.replace("/items");
    }
  }, [router]);

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/items");
    },
    onError: (error) => {
      setError("email", {
        type: "server",
        message: "이메일을 확인해 주세요.",
      });

      setError("password", {
        type: "server",
        message: "비밀번호를 확인해 주세요.",
      });

      setModalMessage(
        error.response?.data?.message || "로그인에 실패했습니다.",
      );
    },
  });

  const onSubmit = (formData) => {
    if (!isValid || signInMutation.isPending) return;

    signInMutation.mutate({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="page">
      <main className="container">
        <header>
          <Link href="/">
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
              id="email"
              className={`input ${errors.email ? "input-error" : ""}`}
              type="email"
              placeholder="이메일을 입력해 주세요"
              {...register("email", {
                required: "이메일을 확인해 주세요.",
              })}
            />

            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              비밀번호
            </label>

            <div className="pw">
              <input
                id="password"
                className={`input pw__input ${
                  errors.password ? "input-error" : ""
                }`}
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해 주세요"
                {...register("password", {
                  required: "비밀번호를 확인해 주세요.",
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
                  alt="보기"
                />
                <img
                  className={showPassword ? "hidden" : "block"}
                  src="/images/icons/eye-off.svg"
                  alt="숨기기"
                />
              </button>
            </div>

            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={!isValid || signInMutation.isPending}
            style={{
              background:
                isValid && !signInMutation.isPending ? "#3692FF" : "#9CA3AF",
            }}
          >
            {signInMutation.isPending ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <section className="social-box">
          <span>간편 로그인하기</span>

          <div className="social-icons">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img src="/images/social/google.svg" alt="google" />
            </a>

            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/social/kakao.svg" alt="kakao" />
            </a>
          </div>
        </section>

        <p className="bottom-text">
          판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
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
