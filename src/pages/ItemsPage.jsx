import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchProducts = () => {
    fetch(
      `http://localhost:8080/products?page=${page}&pageSize=10&orderBy=${orderBy}&keyword=${keyword}`,
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.list || []))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, [page, orderBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchProducts();
  };

  return (
    <section style={{ padding: "40px 0 100px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
            판매 중인 상품
          </h2>
          <div style={{ display: "flex", gap: "12px" }}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="🔍 검색할 상품을 입력해주세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{
                  width: "325px",
                  height: "42px",
                  padding: "10px 16px",
                  borderRadius: "12px",
                  border: "solid 1px transparent",
                  backgroundColor: "#F3F4F6",
                  color: "#9CA3AF",
                  fontSize: "16px",
                }}
              />
            </form>
            <Link
              to="/registration"
              style={{
                height: "42px",
                padding: "12px 23px",
                borderRadius: "8px",
                border: "solid 1px transparent",
                cursor: "pointer",
                backgroundColor: "#3692FF",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              상품 등록하기
            </Link>
            <select
              onChange={(e) => setOrderBy(e.target.value)}
              style={{
                width: "130px",
                height: "42px",
                padding: "12px 20px",
                borderRadius: "12px",
                border: "1px solid #E5E7EB",
                fontSize: "16px",
              }}
            >
              <option value="recent">최신순</option>
              <option value="oldest">오래된순</option>
            </select>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/items/${item.id}`)}
              style={{ color: "#1F2937" }}
            >
              <img
                src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800" //기본 이미지 대체(요구사항)
                alt={item.name}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <p
                  style={{
                    margin: "16px 0px 0px 0px",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    margin: "0",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  {item.price.toLocaleString()}원
                </p>

                <p
                  style={{
                    margin: "16px 0px 0px 0px",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  {item.description}
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                  }}
                >
                  # {item.tags}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #E5E7EB",
              background: "#fff",
              padding: "8px 12px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            &lt;
          </button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid #E5E7EB",
                cursor: "pointer",
                backgroundColor: page === num ? "#3692FF" : "#fff",
                color: page === num ? "#fff" : "#6B7280",
              }}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => p + 1)}
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #E5E7EB",
              background: "#fff",
              padding: "8px 12px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
