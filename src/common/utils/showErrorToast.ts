import { toast } from "react-hot-toast";

import type { ApiError } from "@/common/types/api";

export const showErrorToast = (err: ApiError | Error, action: string) => {
  toast.error(err.message || `${action}에 실패했습니다.`);
};
