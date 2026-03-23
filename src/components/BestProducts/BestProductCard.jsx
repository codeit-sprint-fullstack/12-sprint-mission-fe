import React from "react";

export const BestProductCard = ({ item }) => {
  return (
    <li>
      <img src={item.images[0]} alt={item.name} />

      <strong>{item.name}</strong>
      <span>{item.price}</span>
      <div>
        <span>{item.favoriteCount}</span>
      </div>
    </li>
  );
};
