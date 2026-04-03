import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const DEFAULT_IMAGE = "/images/default-product.png";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const formattedPrice = product.price.toLocaleString();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/items/${product.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="product-image-box">
        <img src={DEFAULT_IMAGE} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formattedPrice}원</p>
      </div>
    </div>
  );
}

export default ProductCard;
