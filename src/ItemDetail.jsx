import React from "react";
import ItemHeader from "./headers/ItemHeader";
import Footer from "./footers/Footer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <ItemHeader />
      <main
        style={{ padding: "100px", textAlign: "center", minHeight: "60vh" }}
      >
        <h1>상품 상세 페이지</h1>
        <p>
          상품 ID:{" "}
          <span style={{ color: "#3692FF", fontWeight: "bold" }}>{id}</span>
        </p>
        <p>준비중</p>
        <button
          onClick={() => navigate("/items")}
          style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
        >
          목록으로 돌아가기
        </button>
      </main>
      <Footer />
    </>
  );
};

export default ItemDetail;
