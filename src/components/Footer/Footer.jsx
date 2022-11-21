import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="right">
            <span>yeshtery</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              ad error iure quae fugiat optio, delectus nisi
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              ad error iure quae fugiat optio, delectus nisi quaerat a magni ex.
              Dolorem exercitationem placeat facere possimus, itaque eaque non
              earum.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              ad error iure quae fugiat optio.
            </p>
          </div>
          <div className="left">
            <p>subscribe to our newsletter</p>
            <div className="email">
              <span>
                subscribe <CiLocationArrow1 />
              </span>
              <input type="email" placeholder="enter your email" />
            </div>
            <div className="lists">
              <ul>
                <li>about us</li>
                <li>contact us</li>
                <li>track orders</li>
                <li>terms & conditions</li>
                <li>privacy policy</li>
                <li>sell with us</li>
                <li>shipping and returns</li>
              </ul>
              <ul>
                <li>
                  <img
                    src="https://yeshtery.com/yeshtery/images/social/facebook@2x.png"
                    alt="facebook"
                  />
                  <span>/yeshtery</span>
                </li>
                <li>
                  <img
                    src="	https://yeshtery.com/yeshtery/images/social/linkedin@2x.png"
                    alt="linkedin"
                  />
                  <span>/yeshtery</span>
                </li>
                <li>
                  <img
                    src="https://yeshtery.com/yeshtery/images/social/instagram@2x.png"
                    alt="instagram"
                  />
                  <span>/yeshtery</span>
                </li>
                <li>
                  <img
                    src="data:image/png;base64,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"
                    alt="twitter"
                  />
                  <span>/yeshtery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>$copy; 2021 yeshtery, all rights reserved</p>
          <div className="cash">
            <img
              src="https://yeshtery.com/yeshtery/images/cash.png"
              alt="cash on delivery"
            />
            <img
              src="https://yeshtery.com/yeshtery/images/visa.png"
              alt="visa"
            />
            <img
              src="https://yeshtery.com/yeshtery/images/matercard.png"
              alt="master cart"
            />
          </div>
          <div className="right">
            <span>Powered By</span>
            <img
              src="https://yeshtery.com/yeshtery/images/nas_nav.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
