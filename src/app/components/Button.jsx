import Link from "next/link";
import React from "react";

const Button = ({ onClick, children, as, href, ...rest }) => {
  if (as === "Link" && href) {
    return (
      <Link
        href={href}
        className="text-lg font-semibold text-white text-center rounded-lg bg-(--Primary-100) px-[23px] py-[8px] hover:bg-(--Primary-200)"
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="text-lg font-semibold text-white text-center rounded-lg bg-(--Primary-100) px-[23px] py-[8px] cursor-pointer hover:bg-(--Primary-200) disabled:bg-(--Secondary-400) disabled:cursor-not-allowed"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
