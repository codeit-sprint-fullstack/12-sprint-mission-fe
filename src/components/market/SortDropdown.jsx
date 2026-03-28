import { useState, useRef, useEffect } from "react";
import styles from "./SortDropdown.module.css";

const OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selectedLabel =
    OPTIONS.find((o) => o.value === value)?.label ?? "최신순";

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }; // 안/밖 감지
    document.addEventListener("click", handler); // 전체 클릭 감지
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)} // 토글 열림/닫힘
      >
        <span>{selectedLabel}</span>
        <img
          src="/icons/ic_arrow_down.svg"
          alt="화살표 이미지"
          width={24}
          height={24}
          className={`${styles.arrow} ${open ? styles.arrowUp : ""}`}
        />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox">
          {OPTIONS.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.option} ${opt.value === value ? styles.selected : ""}`}
              role="option"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
