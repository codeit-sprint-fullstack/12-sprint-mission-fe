import React, { useState } from "react";

export const useProductValidation = () => {
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    tags: "",
    tagInput: "",
  });

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "상품명을 입력해주세요.";
        if (value.length > 10) return "10자 이내로 입력해주세요.";
        return "";
      case "description":
        if (!value.trim()) return "상품 소개를 입력해주세요.";
        if (value.length < 10) return "10자 이상 입력해주세요.";
        if (value.length > 100) return "100자 이내로 입력해주세요.";
        return "";
      case "price":
        if (!value) return "판매가격을 입력해주세요";
        if (Number(value) < 1) return "1 이상의 숫자로 입력해주세요.";
        return "";
      case "tags":
        if (!Array.isArray(value) || value.length === 0) {
          return "태그를 입력 후 엔터키를 눌러 추가해주세요.";
        }
        return "";
      case "tagInput":
        if (value.length > 5) return "5글자 이내로 입력해주세요.";
        return "";
      default:
        return "";
    }
  };

  const validateField = (name, value) => {
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  return { errors, validateField };
};
