import React from "react";

const ProductCard = ( product ) => {
  const { name, price, discountPrice, imageUrl, description, isOpen } = product;

  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="card-prices">
        <span className="card-price">${price}</span>
        {discountPrice && (
          <span className="card-discount-price">${discountPrice}</span>
        )}
        {isOpen ? <h6>Opened</h6> : <h5>Closed</h5>}
      </div>
    </div>
  );
};

export default ProductCard;
