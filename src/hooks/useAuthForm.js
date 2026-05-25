import { useState } from "react";

export default function useAuthForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (action) => {
    if (!isValid) return;

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await action(values);
    } finally {
      setIsSubmitting(false);
    }
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
    isSubmitting,
    submitError,
    setSubmitError,
    handleChange,
    handleSubmit,
  };
}
