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
