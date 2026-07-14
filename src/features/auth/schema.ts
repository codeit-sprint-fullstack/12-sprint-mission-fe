import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요")
    .regex(/\S+@\S+\.\S+/, "올바른 이메일 형식이 아닙니다"),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요")
    .min(8, "비밀번호를 8자 이상 입력해주세요"),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const signupSchema = loginSchema
  .extend({
    nickname: z.string().min(1, "닉네임을 입력해주세요"),
    passwordConfirmation: z
      .string()
      .min(1, "비밀번호 확인을 입력해주세요")
      .min(8, "비밀번호를 8자 이상 입력해주세요"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordConfirmation"],
  });

export type SignupValues = z.infer<typeof signupSchema>;
