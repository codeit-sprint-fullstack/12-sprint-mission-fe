import styles from "./ProductCard.module.css";

function formatPrice(price) {
  if (price == null) return "";
  return price.toLocaleString("ko-KR") + "원";
}

export default function ProductCard({ product }) {
  const { name, price, images, favoriteCount } = product;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {images?.[0] ? (
          <img src={images[0]} alt={name} className={styles.image} />
        ) : (
          <div className={styles.noImage}>이미지 없음</div>
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{formatPrice(price)}</p>
        <p className={styles.favorite}>
          <img src="/icons/ic_heart.svg" alt="좋아요" width={16} height={16} />
          {favoriteCount ?? 0}
        </p>
      </div>
    </article>
  );
}
