import styles from "./Pagination.module.css";

const MAX_VISIBLE = 5;

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const half = Math.floor(MAX_VISIBLE / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + MAX_VISIBLE - 1);

  if (end - start < MAX_VISIBLE - 1) {
    start = Math.max(1, end - MAX_VISIBLE + 1);
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <nav className={styles.pagination} aria-label="페이지 네비게이션">
      {/* 이전 버튼 */}
      <button
        className={styles.arrowBtn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1} // 1페이지 비활성화
        aria-label="이전 페이지"
      >
        <img
          src="/icons/Ellipse_39.svg"
          alt=""
          className={styles.ellipseBg}
          width={40}
          height={40}
        />
        <img
          src="/icons/arrow_left.svg"
          alt=""
          className={styles.arrowIcon}
          width={16}
          height={16}
        />
      </button>

      {/* 페이지 번호 */}
      {start > 1 && (
        <>
          <button className={styles.btn} onClick={() => onPageChange(1)}>
            1
          </button>
          {start > 2 && <span className={styles.ellipsis}>…</span>}
        </>
      )}

      {/* 현재 페이지 강조 */}
      {pages.map((p) => (
        <button
          key={p}
          className={`${styles.btn} ${p === currentPage ? styles.active : ""}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      {/* 뒤쪽 생략 */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className={styles.ellipsis}>…</span>}
          <button
            className={styles.btn}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* 다음 버튼 */}
      <button
        className={styles.arrowBtn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="다음 페이지"
      >
        <img
          src="/icons/Ellipse_39.svg"
          alt=""
          className={styles.ellipseBg}
          width={40}
          height={40}
        />
        <img
          src="/icons/arrow_right.svg"
          alt=""
          className={styles.arrowIcon}
          width={16}
          height={16}
        />
      </button>
    </nav>
  );
}
