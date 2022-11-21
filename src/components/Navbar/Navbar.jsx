import React from "react";
import Bottom from "./Bottom";
import Middle from "./Middle";
import Top from "./Top";

const Navbar = ({ onShowCart, quantity }) => {
  return (
    <div>
      <Top />
      <Middle quantity={quantity} onShowCart={onShowCart} />
      <Bottom />
    </div>
  );
};

export default Navbar;
