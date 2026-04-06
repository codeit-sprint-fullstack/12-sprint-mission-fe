import styles from "./ErrorState.module.css";

export const ErrorState = ({ error, onRetry }) => {
  // 네트워크 에러나 서버 에러면 다시 시도 버튼
  const RETRYABLE_ERRORS = ["NETWORK_ERROR", "SERVER_ERROR"];
  const canRetry = onRetry && RETRYABLE_ERRORS.includes(error.type);

  return (
    <div className={styles.error}>
      <p className={`text-lg-regular ${styles.message}`}>{error.message}</p>

      {canRetry && (
        <button
          className={`btn-base text-md-medium ${styles.retryBtn}`}
          onClick={onRetry}
        >
          다시 시도하기
        </button>
      )}
    </div>
  );
};
