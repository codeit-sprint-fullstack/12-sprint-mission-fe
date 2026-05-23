"use client";

export default function CustomModal({
  isOpen,
  message,
  confirmText = "확인",
  cancelText = "취소",
  showCancel = false,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 px-5">
      <div className="w-full max-w-[360px] rounded-[8px] bg-white px-[32px] py-[28px] text-center shadow-lg">
        <div className="mx-auto mb-[20px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F74747] text-[16px] font-bold text-white">
          !
        </div>

        <p className="mb-[28px] text-[16px] font-medium leading-[24px] text-[#111827]">
          {message}
        </p>

        <div
          className={
            showCancel
              ? "flex items-center justify-center gap-[12px]"
              : "flex justify-center"
          }
        >
          {showCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="h-[44px] w-[112px] rounded-[8px] border border-[#F74747] bg-white text-[14px] font-semibold text-[#F74747]"
            >
              {cancelText}
            </button>
          )}

          <button
            type="button"
            onClick={onConfirm}
            className="h-[44px] w-[112px] rounded-[8px] bg-[#F74747] text-[14px] font-semibold text-white"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
