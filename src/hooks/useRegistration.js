import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputValidation from "./useInputValidation";
import useDebounce from "./useDebounce";

export const useRegistration = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const [touched, setTouched] = useState({
    name: false,
    description: false,
    price: false,
    tags: false,
  });

  // 입력값에 디바운싱 적용
  const debouncedName = useDebounce(name, 300);
  const debouncedDescription = useDebounce(description, 300);
  const debouncedPrice = useDebounce(price, 300);
  const debouncedTag = useDebounce(tag, 300);

  const { errors, isInputsValid } = useInputValidation({
    name: debouncedName,
    description: debouncedDescription,
    price: debouncedPrice,
    tag: debouncedTag,
    touched,
  });

  // 모든 input box가 입력되어야 버튼 활성화
  // (단, 태그는 tags에 목록이 있으면 input이 비어도 활성화)
  const isActive =
    isInputsValid &&
    debouncedName.trim() !== "" &&
    debouncedDescription.trim() !== "" &&
    debouncedPrice.trim() !== "" &&
    (debouncedTag.trim() !== "" || tags.length > 0);

  const navigate = useNavigate();

  const initReg = () => {
    setName("");
    setDescription("");
    setPrice("");
    setTags([]);
    setTag("");
    setTouched({ name: false, description: false, price: false, tags: false });
  };

  const handleOnChange = (e) => {
    const { value, name: inputName } = e.target;

    setTouched((prev) => ({ ...prev, [inputName]: true }));

    if (inputName === "name") {
      setName(value);
    } else if (inputName === "description") {
      setDescription(value);
    } else if (inputName === "price") {
      setPrice(value);
    } else if (inputName === "tags") {
      setTag(value);
    }
  };

  // 포커스를 잃었을 때도 touched 상태 업데이트 (입력 없이 지나갈 때 에러 노출용)
  const handleOnBlur = (e) => {
    const { name: inputName } = e.target;
    setTouched((prev) => ({ ...prev, [inputName]: true }));
  };

  // 엔터 키 입력을 가로채는 함수
  const handleKeyDown = (e) => {
    // 한글 입력 시 엔터키가 두 번 작동하는 오류 방지용 코드
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();

      const trimmedTag = tag.trim();

      // 빈 값이 아닐 때만 태그 배열에 추가
      if (trimmedTag !== "") {
        if (trimmedTag.length > 5) return;

        const validTag = tags.find((t) => t === trimmedTag);
        if (validTag) {
          alert("중복되지 않는 태그를 입력해주세요");
          return;
        }
        const addTag = [...tags, trimmedTag];
        setTags(addTag);
        setTag("");
      }
    }
  };

  const handleTagDelete = (key) => {
    const deletedTags = tags.filter((t) => t !== key);
    setTags(deletedTags);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReg = {
        name: name.trim(),
        description: description.trim(),
        price: Number(price.trim()),
        tags: tag.trim() !== "" ? [...tags, tag.trim()] : tags,
      };

      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReg),
      });
      if (!res.ok) {
        throw new Error("상품 등록에 실패했습니다.");
      }
      const result = await res.json();

      initReg();

      console.log("상품 등록 완료! => ", result);
      navigate(`/items/${result.data._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    name,
    description,
    price,
    tag,
    tags,
    isActive,
    errors,
    handleOnChange,
    handleOnSubmit,
    handleKeyDown,
    handleTagDelete,
    handleOnBlur,
  };
};
