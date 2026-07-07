"use client";

import Image from "next/image";
import { useState } from "react";

import type { BaseFieldProps } from "@/common/types/form";

type AuthFieldProps = BaseFieldProps & {
  type: string;
  autoComplete?: string;
};

export function AuthField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}: AuthFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-lg md:text-2lg font-bold text-gray-800"
      >
        {label}
      </label>

      <div className="relative w-full mt-2 md:mt-4">
        <input
          id={id}
          name={id}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`
            w-full h-14 px-6 py-4 rounded-xl text-lg text-gray-800 placeholder:text-gray-400 bg-gray-100 
            ${isPassword ? "pr-12" : ""}
            focus:outline-none focus:ring focus:ring-primary focus:ring-2 
            ${error ? "border-1 border-error" : "border-0"}  
          `}
        />
        {isPassword && (
          <Image
            src={
              showPassword
                ? "/icons/ic-visibility-off.svg"
                : "/icons/ic-visibility.svg"
            }
            width={24}
            height={24}
            alt="비밀번호 보기 토글"
            className="absolute top-1/2 -translate-y-1/2 right-6 w-6 h-6 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}
      </div>
      {error && (
        <p className="mt-2 ml-4 text-error text-md font-semibold">{error}</p>
      )}
    </div>
  );
}
