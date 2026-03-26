import "./ProductCard.css";

function ProductCard({ product, isBest = false }) {
  const formattedPrice = product.price.toLocaleString();

  return (
    <div className={`product-card ${isBest ? "best" : ""}`}>
      <div className="product-image-box">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formattedPrice}원</p>
        <div className="product-footer">
          <span className="favorite-count">❤️ {product.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
