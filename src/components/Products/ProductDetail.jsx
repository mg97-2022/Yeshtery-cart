import React from "react";
import { FaStar } from "react-icons/fa";
import { formatNumbers } from "./ProductItem";

const ProductDetail = ({ product, onSendProductToCart }) => {
  const { rates, category, imgs, logo, title, rating, price, sizes, color } =
    product;

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    onSendProductToCart({
      ...product,
      quantity: 1,
    });
  };

  return (
    <div className="container productDetails">
      <div className="images">
        <img src={imgs[0]} alt="" />
        <div className="sliderImages">
          {imgs.map((img, index) => (
            <img src={img} alt={title} key={index} />
          ))}
        </div>
      </div>
      <div className="info">
        <img src={logo} alt="logo" />
        <h3>{title}</h3>
        <span>{category}</span>
        <div className="rating">
          <div className="stars">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <FaStar key={i} />;
              })}
          </div>
          <span>{rating} of 5</span>
          <span>{rates} Rates</span>
        </div>
        <div className="price">
          <span>
            {`${formatNumbers(price)}`}
            <span>LE</span>
          </span>
        </div>
        <div className="sizes">
          <span>sizes</span>
          <div>
            {sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        </div>
        <span className="color">
          <span>color:</span>
          {color}
        </span>
        <form onSubmit={formSubmitHandler}>
          <span>quantity</span>
          <div className="input">
            <button type="button">-</button>
            <input type="number" defaultValue="1" min="1" step="1" />
            <button type="button">+</button>
          </div>
          <div className="btns">
            <button type="submit">add to cart</button>
            <button type="button">pickup from store</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
