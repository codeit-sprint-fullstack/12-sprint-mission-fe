import React, { useState } from "react";

export default function RegistrationPage() {
  const [newData, setNewData] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
    images: ["https://via.placeholder.com/300"],
  });

  const [tagInput, setTagInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newData.name || !newData.price) {
      alert("상품명과 가격을 입력해주세요.");
      return;
    }
    await fetch(`http://localhost:8080/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newData, price: Number(newData.price) }),
    });
    setNewData({
      name: "",
      description: "",
      price: "",
      tags: [],
      images: ["https://via.placeholder.com/300"],
    });
    setTagInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        width: "1200px",
        flexDirection: "column",
        margin: "60px auto",
        gap: "24px",
        color: "#1F2937",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "20px", fontWeight: "700" }}>
          상품 등록하기
        </span>
        <button
          type="submit"
          style={{
            height: "42px",
            padding: "12px 23px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#F3F4F6",
            backgroundColor: "#9CA3AF",
            border: "solid 1px transparent",
            borderRadius: "8px",
          }}
        >
          등록
        </button>
      </div>
      <div style={{ width: "100%" }}>
        <p style={{ fontSize: "18px", fontWeight: "700" }}>상품명</p>
        <input
          placeholder="상품명을 입력해주세요"
          value={newData.name}
          onChange={(e) => {
            setNewData({ ...newData, name: e.target.value });
          }}
          style={{
            width: "100%",
            height: "56px",
            padding: "16px 24px",
            fontSize: "16px",
            color: "#9CA3AF",
            backgroundColor: "#F3F4F6",
            border: "solid 1px transparent",
            borderRadius: "12px",
          }}
        />
        <p style={{ fontSize: "18px", fontWeight: "700" }}>상품 소개</p>
        <textarea
          placeholder="상품소개를 입력해주세요"
          value={newData.description}
          onChange={(e) => {
            setNewData({ ...newData, description: e.target.value });
          }}
          style={{
            width: "100%",
            height: "282px",
            padding: "16px 24px",
            fontSize: "16px",
            color: "#9CA3AF",
            lineHeight: "26px",
            backgroundColor: "#F3F4F6",
            border: "solid 1px transparent",
            borderRadius: "12px",
          }}
        />
        <p style={{ fontSize: "18px", fontWeight: "700" }}>판매가격</p>
        <input
          type="number"
          placeholder="판매 가격을 입력해주세요"
          value={newData.price}
          onChange={(e) =>
            setNewData({
              ...newData,
              price: e.target.value,
            })
          }
          style={{
            width: "100%",
            height: "56px",
            padding: "16px 24px",
            fontSize: "16px",
            color: "#9CA3AF",
            backgroundColor: "#F3F4F6",
            border: "solid 1px transparent",
            borderRadius: "12px",
          }}
        />
        <p style={{ fontSize: "18px", fontWeight: "700" }}>태그</p>
        <input
          placeholder="태그를 입력해주세요"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.nativeEvent.isComposing) return;
            if (e.key === "Enter") {
              e.preventDefault();
              if (tagInput.trim()) {
                setNewData({
                  ...newData,
                  tags: [...newData.tags, tagInput.trim()],
                });
                setTagInput("");
              }
            }
          }}
          style={{
            width: "100%",
            height: "56px",
            padding: "16px 24px",
            fontSize: "16px",
            color: "#9CA3AF",
            backgroundColor: "#F3F4F6",
            border: "solid 1px transparent",
            borderRadius: "12px",
          }}
        />
        <div
          style={{
            marginTop: "8px",
            display: "flex",
            gap: "8px",
          }}
        >
          {newData.tags.map((tag, i) => (
            <span
              key={i}
              style={{
                height: "36px",
                padding: "6px 12px 6px 16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F3F4F6",
                borderRadius: "26px",
                fontSize: "14px",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
}
