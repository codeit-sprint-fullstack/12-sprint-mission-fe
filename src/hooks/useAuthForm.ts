import { useState } from "react";

// 로그인/회원가입 폼의 필드 구성은 다르지만 값은 전부 문자열이라는 공통 제약
type FormValues = Record<string, string>;
// T(실제 폼 필드 타입)와 동일한 키를 갖되, 값은 옵셔널로 변경
type FormErrors<T extends FormValues> = Partial<Record<keyof T, string>>;

export function useAuthForm<T extends FormValues>(
  initialValues: T,
  validate: (values: T) => FormErrors<T>,
) {
  const [values, setValues] = useState<T>(initialValues);
  // 필드별 유효성 검사 에러
  const [errors, setErrors] = useState<FormErrors<T>>({});
  // 폼 전체 에러 (모달에 표시)
  const [submitError, setSubmitError] = useState<string | null>(null);

  // input 값이 바뀔 때마다 호출
  const handleChange = (name: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // 해당 필드에 이미 에러 메시지가 떠있는 경우 에러 삭제 (사용자가 다시 타이핑을 시작했으므로)
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // 제출 시 호출: 유효성 검사를 실행하고, 통과한 경우에만 값을 반환
  const getValidatedValues = (): T | null => {
    // 훅 바깥에서 넘겨준 validate 함수 실행
    const validationErrors = validate(values);

    // 에러가 하나라도 있는 경우 errors state에 저장하고 null 반환(제출 방지용)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return null;
    }

    // 에러가 없으면 그대로 values 반환
    return values;
  };

  // 서버가 응답한 에러 반영
  // 프론트 유효성 검사는 통과했는데 서버에서 에러를 내려준 경우, 해당 에러를 errors state에 저장
  const setFieldErrors = (newErrors: FormErrors<T>) => {
    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));
  };

  // 제출 버튼 활성화 여부: 모든 필드 값이 공백이 아니며, 에러가 하나도 없는 경우
  const isValid =
    Object.values(values).every((v) => v.trim().length > 0) &&
    Object.keys(errors).length === 0;

  return {
    values,
    errors,
    setFieldErrors,
    isValid,
    submitError,
    setSubmitError,
    handleChange,
    getValidatedValues,
  };
}
