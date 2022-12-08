import React, { useState, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { formatNumbers } from "./ProductItem";

const ProductDetail = ({ product, onSendProductToCart }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const carousel = useRef();
  const { rates, category, imgs, logo, title, rating, price, sizes, color } =
    product;

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    onSendProductToCart({
      ...product,
      quantity: 1,
    });
  };

  // image handler
  const previousImgHandler = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    if (imgIndex - 1 === -1) {
      setImgIndex(imgs.length - 1);
      return;
    }
    setImgIndex((prev) => prev - 1);
  };
  const nextImgHandler = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;

    if (imgIndex + 1 >= imgs.length) {
      setImgIndex(0);
      return;
    }
    setImgIndex((prev) => prev + 1);
  };

  return (
    <div className="container productDetails">
      <div className="images">
        <img src={imgs[imgIndex]} alt="" />
        <div className="imgsContainer">
          <div className="controllers">
            <IoIosArrowBack onClick={previousImgHandler} />
            <IoIosArrowForward onClick={nextImgHandler} />
          </div>
          <div className="sliderImages" ref={carousel}>
            {imgs.map((img, index) => (
              <img src={img} alt={title} key={index} />
            ))}
          </div>
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
                return <AiFillStar key={i} />;
              })}
            {Array(5 - rating)
              .fill()
              .map((_, i) => {
                return <AiOutlineStar key={Math.random()} />;
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
              <span className={size === "large" ? "active" : ""} key={size}>
                {size}
              </span>
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
            <button type="button">
              <span>_</span>
            </button>
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
