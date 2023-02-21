import React from "react";

const ProductCard = ( product ) => {
  const { name, price, discountPrice, imageUrl } = product;

  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <div className="card-prices">
        <span className="card-price">${price}</span>
        {discountPrice && (
          <span className="card-discount-price">${discountPrice}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
