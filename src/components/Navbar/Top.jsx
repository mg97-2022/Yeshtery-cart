import React from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { BsTelephonePlus } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Top = () => {
  return (
    <div className="topNavContainer">
      <div className="container topNav">
        <div className="left">
          <HiOutlineBars3CenterLeft />
          <span>yeshtery</span>
        </div>
        <div className="middle">
          <IoIosArrowBack />
          <span>
            valentine's day offers! buy two get one free
            <a href="/">show now</a>
          </span>
          <IoIosArrowForward />
        </div>
        <div className="right">
          <div>
            <BsTelephonePlus />
            <span>contact us</span>
          </div>
          <div>
            <BsCart3 />
            <span>track order</span>
          </div>
          <div>
            <CiLocationOn />
            <span>find a store</span>
          </div>
        </div>
        <div className="bars">
          <HiOutlineBars3CenterLeft />
        </div>
      </div>
    </div>
  );
};

export default Top;
