import { toast } from "react-hot-toast";

export const showErrorToast = (err, action) => {
  toast.error(
    err.response?.data?.message || err.message || `${action}에 실패했습니다.`,
  );
};
