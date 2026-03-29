import React, { useState } from "react";
import icFavorite from "../assets/ic_favorite.png";
// import icFavoriteActive from "../assets/ic_favorite_active.png";
import placeholderImg from "../assets/product_img_default_sm.png";
import styles from "../styles/UsedMarket.module.css";
import SkeletonUI from "./SkeletonUI";

const CardGeneral = ({ product }) => {
  const [loaded, setLoaded] = useState(false);
  const handelErrorImg = (e) => {
    e.target.src = placeholderImg;
  };

  return (
    <li className={styles.cardGeneral}>
      <img
        src={product.images}
        onError={handelErrorImg}
        alt={product.name}
        style={loaded ? { display: "block" } : { display: "none" }}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <SkeletonUI />}
      <div className={styles.cardInfo}>
        <p className={`${styles.title} text-md medium`}>{product.name}</p>
        <p className={`${styles.price} text-lg bold`}>
          {product.price.toLocaleString()}원
        </p>
        <div className={styles.favorite}>
          <img src={icFavorite} />
          <p className="text-xs medium">{product.favoriteCount}</p>
        </div>
      </div>
    </li>
  );
};

export default CardGeneral;
