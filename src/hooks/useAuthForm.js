import { useState } from "react";

export default function useAuthForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const getValidatedValues = () => {
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return null;
    }
    return values;
  };

  // 서버 응답 에러 처리
  const setFieldErrors = (newErrors) => {
    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));
  };

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
