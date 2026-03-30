import React from "react";
import Card_best from "./Card_best";
import "../style/BestProductSection.css";

const BestProductSection = ({ products }) => {
  return (
    <section className="best-product-section">
      <div className="best-product-header">
        <h2>베스트 상품</h2>
      </div>
      <div className="best-product-grid">
        {products.map((p) => (
          <Card_best
            key={p.id}
            image={p.images?.[0]}
            title={p.title}
            price={p.price}
            favoriteCount={p.favoriteCount}
          />
        ))}
      </div>
    </section>
  );
};

export default BestProductSection;
