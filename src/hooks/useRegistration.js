import { useState } from "react";

export const useRegistration = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  // 모든 input box가 입력되어야 버튼 활성화
  // (단, 태그는 tags에 목록이 있으면 input이 비어도 활성화)
  const isActive =
    name.trim() !== "" &&
    description.trim() !== "" &&
    price.trim() !== "" &&
    (tag.trim() !== "" || tags.length > 0);

  const initReg = () => {
    setName("");
    setDescription("");
    setPrice("");
    setTags([]);
    setTag("");
  };

  const handleOnChange = (e) => {
    const { value, name: inputName } = e.target;

    if (inputName === "name") {
      const getName = value;
      setName(getName);
    } else if (inputName === "description") {
      const getDescription = value;
      setDescription(getDescription);
    } else if (inputName === "price") {
      const getPrice = value;
      setPrice(getPrice);
    } else if (inputName === "tags") {
      const getTag = value;
      setTag(getTag);
    }
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
        price: price.trim(),
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
      const data = await res.json();

      initReg();

      console.log("상품 등록 완료! => ", data);
    } catch (error) {
      console.error(error);
    }
  };

  // 시간 남으면 Debouncing 추가해보기

  return {
    name,
    description,
    price,
    tag,
    tags,
    isActive,
    handleOnChange,
    handleOnSubmit,
    handleKeyDown,
    handleTagDelete,
  };
};
