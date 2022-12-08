import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export const formatNumbers = (num) => {
  return num.toString().replace(/^[+-]?\d+/, function (int) {
    return int.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  });
};

const formatText = (description) => {
  return description.length <= 35
    ? description
    : `${description.slice(0, 35)}...`;
};

const ProductItem = ({ product }) => {
  const { imgs, title, logo, price, rating, discount, shipping } = product;
  return (
    <div className="productItem">
      <div className="rotate">
        <img
          src="https://www.yeshtery.com/yeshtery/images/360@2x.svg"
          alt="rotate"
        />
      </div>
      <img src={imgs[0]} alt={title} />
      <div className="info">
        <h5>{formatText(title)}</h5>
        <div className="priceLogo">
          <div className="price">
            <span>
              {`${formatNumbers(price)}`}{' '}
              <span>LE</span>
            </span>
            {discount && (
              <div className="discount">
                <span>
                  {formatNumbers((price * `${1 + discount / 100}`).toFixed(0))}
                </span>
                <span>{`${discount}%`}</span>
              </div>
            )}
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="rating">
          <div className="stars">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <AiFillStar key={i} />;
              })}
            {Array(5 - rating)
              .fill()
              .map((_, i) => {
                return <AiOutlineStar key={Math.random()} />;
              })}
          </div>
          <span>{rating} of 5</span>
        </div>
        <div className="shipping">
          {shipping.duration && (
            <div>
              <span>
                From:{' '}
                <span>{shipping.location}</span>
              </span>
              <span>
                To:{' '}
                <span>Egypt</span>
              </span>
              <span>
                in:{' '}
                <span>{shipping.duration}{' '}Days</span>

              </span>
            </div>
          )}
          {!shipping.duration && (
            <span>
              Pickup From:{' '}
              <span>{shipping.location}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
