"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

const MODAL_THEME = {
  confirm: {
    iconBg: "bg-primary",
    cancel: "outlinedBlue",
    confirm: "primary",
  },

  danger: {
    iconBg: "bg-error",
    cancel: "outlinedRed",
    confirm: "destructive",
  },
};

/* variant: "confirm" | "danger" */
export default function Modal({
  isOpen,
  onClose,
  title,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  variant = "confirm",
  loading = false,
}) {
  if (!isOpen) return null;

  const theme = MODAL_THEME[variant];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={loading ? undefined : onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="
          relative flex flex-col items-center justify-center w-[18.625rem] p-6
          bg-white rounded-xl shadow-[0_4px_16px_0_rgba(17,34,17,0.05)]
        "
      >
        <div
          className={`flex items-center justify-center w-6 h-6 mb-6 rounded-full ${theme.iconBg}`}
        >
          <Image
            src="/icons/ic-check.svg"
            width={12}
            height={12}
            alt=""
            aria-hidden="true"
          />
        </div>
        <h2 id="modal-title" className="mb-8 text-lg font-medium text-gray-800">
          {title}
        </h2>

        <div className="flex gap-2">
          <Button
            variant={theme.cancel}
            size="md"
            onClick={loading ? undefined : onClose}
          >
            {cancelText}
          </Button>

          <Button
            variant={theme.confirm}
            size="md"
            onClick={onConfirm}
            loading={loading}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
