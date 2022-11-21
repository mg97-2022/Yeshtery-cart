import React, { useState, Suspense } from "react";
// import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

const Cart = React.lazy(() => import("./components/Cart/Cart"));

let newQuantity = 0;
let cartProduct = {};

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prev) => !prev);
  };

  const sendProductToCartHandler = (product) => {
    newQuantity++;
    cartProduct = {
      ...product,
      quantity: newQuantity,
    };
  };

  return (
    <div className="app">
      <Navbar onShowCart={showCartHandler} quantity={newQuantity} />
      <Products onSendProductToCart={sendProductToCartHandler} />
      <Suspense fallback={<p>loading...</p>}>
        <Cart
          cartProduct={cartProduct}
          onShowCart={showCartHandler}
          showCart={showCart}
        />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
