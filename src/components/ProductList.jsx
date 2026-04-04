const ProductList = ({ lists, type }) => {
  return (
    <ul className={`product__list ${type}`}>
      {lists.length ? (
        lists.map((item) => (
          <li key={item.id} className="product__item">
            <div className="item--info">
              <p className="item--name">{item.name}</p>
              <p className="item--price">{item.price.toLocaleString()}원</p>
            </div>
          </li>
        ))
      ) : (
        <li className="empty-list">등록된 상품이 없습니다.</li>
      )}
    </ul>
  );
};

export default ProductList;
