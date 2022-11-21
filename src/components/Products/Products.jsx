import React from "react";
import products from "../../services/sliderData";
import ListOfProducts from "./ListOfProducts";
import ProductDetail from "./ProductDetail";

// const product = {
//   ...products[0],
//   quantity: 0,
// };

const Products = ({ onSendProductToCart, num }) => {
  return (
    <>
      <ProductDetail
        onSendProductToCart={onSendProductToCart}
        product={products[0]}
      />
      <ListOfProducts products={products} />
    </>
  );
};

export default Products;
