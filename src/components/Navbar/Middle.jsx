import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { BsMinecartLoaded } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const Middle = ({ onShowCart, quantity }) => {
  return (
    <div className="container middleNav">
      <div className="left">
        <GoSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="middle">
        <img
          src="https://api.yeshtery.com/v1/yeshtery/files/31/adidas-2805b77d93b649829a95d869558736a2.png?height=150"
          alt="addidasLogo"
        />
      </div>
      <div className="right">
        <div className="cartIcon" onClick={onShowCart}>
          <span>{quantity}</span>
          <BsMinecartLoaded />
          <span>cart</span>
        </div>
        <div>
          <AiOutlineHeart />
          <span>wishlist</span>
        </div>
        <div>
          <HiOutlineUser />
          <span>login</span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
