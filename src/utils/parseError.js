export const parseError = (err) => {
  const status = err.status;

  if (status === 400) {
    return {
      type: "BAD_REQUEST",
      message: err.message || "잘못된 요청입니다.",
    };
  }

  if (status === 401) {
    return { type: "UNAUTHORIZED", message: "로그인이 필요합니다." };
  }

  if (status === 403) {
    return { type: "FORBIDDEN", message: "접근 권한이 없습니다." };
  }

  if (status === 404) {
    return { type: "NOT_FOUND", message: "요청한 데이터를 찾을 수 없습니다." };
  }

  if (status >= 500) {
    return { type: "SERVER_ERROR", message: "서버 오류가 발생했습니다." };
  }

  if (!status) {
    return { type: "NETWORK_ERROR", message: "네트워크 연결을 확인해주세요." };
  }

  return {
    type: "UNKNOWN",
    message: err.message || "알 수 없는 오류가 발생했습니다.",
  };
};
