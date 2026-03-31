export const ErrorState = ({ error, onRetry }) => {
  // 네트워크 에러나 서버 에러면 다시 시도 버튼
  const RETRYABLE_ERRORS = ["NETWORK_ERROR", "SERVER_ERROR"];
  const canRetry = onRetry && RETRYABLE_ERRORS.includes(error.type);

  return (
    <div>
      <p>{error.message}</p>
      {canRetry && <button onClick={onRetry}>다시 시도</button>}
    </div>
  );
};
