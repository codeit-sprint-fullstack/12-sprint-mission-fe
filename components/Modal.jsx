"use client";

import "../styles/Modal.css";
export default function Modal({ isOpen, message, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p className="modal-message">{message}</p>
        <button className="modal-button" onClick={onConfirm}>
          확인
        </button>
        <button className="modal-button" onClick={onClose}>
          취소
        </button>
      </div>
    </div>
  );
}
