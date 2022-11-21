import React from "react";
import ProductItem from "./ProductItem";

const ListOfProducts = ({ products }) => {
  return (
    <div className=" container productsList">
      <h4>similar products</h4>
      <p>You may like these products also</p>
      <div className="list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListOfProducts;
