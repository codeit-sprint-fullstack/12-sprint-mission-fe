import { useEffect, useState } from "react";

export function useFormValidation(formData, tags) {
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const newErrors = {};

    if (
      formData.name &&
      (formData.name.length < 1 || formData.name.length > 10)
    ) {
      newErrors.name = "10자 이내로 입력해주세요";
    }
    if (
      formData.description &&
      (formData.description.length < 10 || formData.description.length > 100)
    ) {
      newErrors.description = "10자 이상, 100자 이내로 입력해주세요";
    }
    if (formData.price && isNaN(formData.price)) {
      newErrors.price = "숫자로 입력해주세요";
    }

    setErrors(newErrors);
    const hasAllValues =
      formData.name && formData.description && formData.price;
    setIsFormValid(hasAllValues && Object.keys(newErrors).length === 0);
  }, [formData]);

  const validateTag = (tag) => {
    if (tag.length > 5) return "5글자 이내로 입력해주세요";
    return "";
  };

  return { errors, isFormValid, validateTag };
}
