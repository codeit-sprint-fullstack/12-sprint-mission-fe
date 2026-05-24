"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import Modal from "../../components/Modal";
import "../../styles/loginpage.css";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
      router.push("/items");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const res = await api.post("/auth/signIn", credentials);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/items");
      }
    },
    onError: (error) => {
      const msg = error.response?.data?.message || error.message || "";

      if (msg.includes("이메일")) {
        setModalMessage("이메일을 확인해 주세요.");
      } else if (msg.includes("비밀번호")) {
        setModalMessage("비밀번호가 일치하지 않습니다.");
      } else {
        setModalMessage(msg || "로그인에 실패했습니다.");
      }
      setModalOpen(true);
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <main className="login">
        <section className="login__container">
          <h1 className="login__logo">
            <Link href="/" className="login__logo-link">
              <img
                className="login__logo-image"
                src="/images/logo.png"
                alt="판다마켓"
              />
            </Link>
          </h1>

          <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login__field">
              <label className="login__label" htmlFor="email">
                이메일
              </label>
              <input
                className={`login__input ${errors.email ? "login__input--error" : ""}`}
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                autoComplete="email"
                {...register("email", { required: "이메일을 입력해주세요." })}
              />

              {errors.email && (
                <p
                  className="login__error-text"
                  style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                >
                  이메일을 확인해 주세요.
                </p>
              )}
            </div>

            <div className="login__field">
              <label className="login__label" htmlFor="password">
                비밀번호
              </label>
              <div className="login__input-wrap login__input-wrap--password">
                <input
                  className={`login__input ${errors.password ? "login__input--error" : ""}`}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요.",
                  })}
                />
                <button
                  className="login__toggle"
                  type="button"
                  aria-label={
                    showPassword ? "비밀번호 숨기기" : "비밀번호 보기"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={
                      showPassword
                        ? "/images/btn_visibility_on_24px.svg"
                        : "/images/btn_visibility_off_24px.svg"
                    }
                    alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                  />
                </button>
              </div>
              {errors.password && (
                <p
                  className="login__error-text"
                  style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                >
                  비밀번호를 확인해 주세요.
                </p>
              )}
            </div>

            <button
              className="login__submit"
              type="submit"
              disabled={!isValid || loginMutation.isPending}
            >
              {loginMutation.isPending ? "로그인 중..." : "로그인"}
            </button>
          </form>

          <section className="login__social" aria-label="간편 로그인">
            <p className="login__social-text">간편 로그인하기</p>
            <div className="login__social-icons">
              <a
                className="login__social-link"
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
                className="login__social-link"
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

          <p className="login__signup">
            판다마켓이 처음이신가요?
            <Link href="/signUp" className="login__signup-link">
              회원가입하기
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
