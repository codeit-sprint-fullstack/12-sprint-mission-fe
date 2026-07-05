"use client";
import React from "react";
import Button from "./Button";

const Modal = ({
  isOpen,
  onClose,
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      // onClick={onClose}
    >
      <div
        className="bg-white rounded-xl py-[40px] px-[20px] flex flex-col items-center min-w-[320px] shadow-lg"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히는 것 방지
      >
        <p className="text-lg text-(--Secondary-800) font-medium mb-[32px]">
          {message}
        </p>
        <Button type="button" onClick={onClose}>
          확인
        </Button>
      </div>
    </div>
  );
};

export default Modal;
