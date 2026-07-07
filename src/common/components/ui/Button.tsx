import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

function Spinner() {
  return (
    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
  );
}

const sizeStyles = {
  sm: "h-[2.625rem] px-[1.4375rem] text-lg font-semibold", // Small_40
  md: "h-12 px-[1.4375rem] text-lg font-semibold", // Small_48
  lg: "h-12 px-[4.4375rem] text-2lg font-semibold", // Medium
  xl: "h-12 px-[4.4375rem] text-2lg font-semibold md:h-14 md:px-[7.75rem] md:text-xl", // Large
} as const;

const roundedStyles = {
  md: "rounded-lg",
  full: "rounded-full",
} as const;

const variantStyles = {
  primary: `
    bg-primary text-white
    hover:bg-primary-dark
    active:bg-primary-darker
    disabled:bg-gray-400 disabled:cursor-not-allowed
  `,
  secondary: `
    bg-white text-gray-500 
    hover:bg-gray-100
    active:bg-gray-200
  `,
  outlinedBlue: `
    bg-white text-primary border border-primary
    hover:bg-blue-50
    active:bg-blue-100
  `,
  outlinedRed: `
    bg-white text-error border border-error
    hover:bg-red-50
    active:bg-red-100
  `,
  destructive: `
    bg-error text-white
    hover:bg-red-600
    active:bg-red-700
    disabled:bg-gray-400 disabled:cursor-not-allowed
  `,
} as const;

// 스타일 객체의 키를 그대로 타입으로 사용해 스타일 추가/삭제 시 prop 타입도 자동으로 따라감
export type ButtonSize = keyof typeof sizeStyles;
export type ButtonRounded = keyof typeof roundedStyles;
export type ButtonVariant = keyof typeof variantStyles;

type ButtonProps = {
  children: ReactNode;
  href?: string; // href가 있으면 링크로, 없으면 버튼으로 렌더링
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  disabled,
  loading = false,
  type = "button",
  variant = "primary",
  size = "sm",
  rounded = "md",
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const baseStyles =
    "inline-flex items-center justify-center gap-[0.625rem] whitespace-nowrap transition-all";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles[rounded]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={combinedClassName}
    >
      {loading && <Spinner />}
      {loading ? `${children} 중` : children}
    </button>
  );
}
