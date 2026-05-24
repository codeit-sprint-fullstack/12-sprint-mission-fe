"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import Modal from "../../components/Modal";
import "../../styles/auth.css";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
      router.push("/items");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const passwordValue = watch("password");

  const signUpMutation = useMutation({
    mutationFn: async (formData) => {
      const res = await api.post("/auth/signUp", formData);
      return res.data;
    },
    onSuccess: (data) => {
      if (data && data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/items");
      }
    },
    onError: (error) => {
      const msg = error.response?.data?.message || error.message || "";

      if (msg.includes("이메일") || msg.includes("email")) {
        setModalMessage("사용 중인 이메일입니다.");
      } else if (msg.includes("닉네임") || msg.includes("nickname")) {
        setModalMessage("닉네임 형식이 올바르지 않거나 너무 깁니다.");
      } else if (msg.includes("Validation Failed")) {
        setModalMessage("입력 형식을 다시 확인해 주세요.");
      } else {
        setModalMessage(msg || "회원가입에 실패했습니다.");
      }
      setModalOpen(true);
    },
  });

  const onSubmit = (data) => {
    signUpMutation.mutate({
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordConfirmation: data.passwordCheck,
    });
  };

  return (
    <>
      <main className="auth">
        <section className="auth__container">
          <h1 className="auth__logo">
            <Link href="/" className="auth__logo-link">
              <img
                className="auth__logo-image"
                src="/images/logo.png"
                alt="판다마켓"
              />
            </Link>
          </h1>

          <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="auth__field">
              <label className="auth__label" htmlFor="email">
                이메일
              </label>
              <input
                className="auth__input"
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                {...register("email", { required: true })}
              />
            </div>

            <div className="auth__field">
              <label className="auth__label" htmlFor="nickname">
                닉네임
              </label>
              <input
                className="auth__input"
                id="nickname"
                type="text"
                placeholder="닉네임을 입력해주세요"
                {...register("nickname", { required: true })}
              />
            </div>

            <div className="auth__field">
              <label className="auth__label" htmlFor="password">
                비밀번호
              </label>
              <div className="auth__input-wrap auth__input-wrap--password">
                <input
                  className="auth__input"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호를 입력해주세요"
                  {...register("password", { required: true })}
                />
                <button
                  className="auth__toggle"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={
                      showPassword
                        ? "/images/btn_visibility_on_24px.svg"
                        : "/images/btn_visibility_off_24px.svg"
                    }
                    alt="비밀번호 토글"
                  />
                </button>
              </div>
            </div>

            <div className="auth__field">
              <label className="auth__label" htmlFor="passwordCheck">
                비밀번호 확인
              </label>
              <div className="auth__input-wrap auth__input-wrap--password">
                <input
                  className={`auth__input ${errors.passwordCheck ? "auth__input--error" : ""}`}
                  id="passwordCheck"
                  type={showPasswordCheck ? "text" : "password"}
                  placeholder="비밀번호를 다시 한 번 입력해주세요"
                  {...register("passwordCheck", {
                    required: true,
                    validate: (value) =>
                      value === passwordValue || "비밀번호가 일치하지 않아요.",
                  })}
                />
                <button
                  className="auth__toggle"
                  type="button"
                  onClick={() => setShowPasswordCheck(!showPasswordCheck)}
                >
                  <img
                    src={
                      showPasswordCheck
                        ? "/images/btn_visibility_on_24px.svg"
                        : "/images/btn_visibility_off_24px.svg"
                    }
                    alt="비밀번호 토글"
                  />
                </button>
              </div>
              {errors.passwordCheck && (
                <p
                  className="auth__error-text"
                  style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                >
                  {errors.passwordCheck.message}
                </p>
              )}
            </div>

            <button
              className="auth__submit"
              type="submit"
              disabled={!isValid || signUpMutation.isPending}
            >
              {signUpMutation.isPending ? "가입 중..." : "회원가입"}
            </button>
          </form>

          <section className="auth__social" aria-label="간편 로그인">
            <p className="auth__social-text">간편 로그인하기</p>
            <div className="auth__social-icons">
              <a
                className="auth__social-link"
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/login_img/ic_google_login.png"
                  alt="구글 로그인"
                />
              </a>
              <a
                className="auth__social-link"
                href="https://www.kakaocorp.com/page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/login_img/ic_kakao_login.png"
                  alt="카카오 로그인"
                />
              </a>
            </div>
          </section>
          <p className="auth__switch">
            이미 회원이신가요?
            <Link href="/signIn" className="auth__switch-link">
              로그인
            </Link>
          </p>
        </section>
      </main>

      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
