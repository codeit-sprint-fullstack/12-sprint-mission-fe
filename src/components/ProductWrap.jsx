import React from "react";

const ProductWrap = ({ title, children, header }) => {
  return (
    <section className="section">
      <div className="contents">
        <header className="section-header">
          <h2>{title}</h2>

          {header && <div className="list-control-bar">{header}</div>}
        </header>

        {children}
      </div>
    </section>
  );
};

export default ProductWrap;
