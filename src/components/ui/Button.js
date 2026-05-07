import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  disabled,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-[0.625rem] whitespace-nowrap transition-all leading-none";

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
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClassName}>
      {children}
    </button>
  );
}
