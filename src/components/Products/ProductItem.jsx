import React from "react";
import { FaStar } from "react-icons/fa";

export const formatNumbers = (num) => {
  return num.toString().replace(/^[+-]?\d+/, function (int) {
    return int.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  });
};

const ProductItem = ({ product }) => {
  const { imgs, title, logo, price, rating } = product;
  return (
    <div className="productItem">
      <img src={imgs[0]} alt={title} />
      <h5>{title}</h5>
      <div className="priceLogo">
        <span>
          {`${formatNumbers(price)}`}
          <span>LE</span>
        </span>
        <img src={logo} alt="logo" />
      </div>
      <div className="rating">
        <div className="stars">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <FaStar key={i} />;
            })}
        </div>
        <span>{rating} of 5</span>
      </div>
    </div>
  );
};

export default ProductItem;
