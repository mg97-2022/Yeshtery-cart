import React, { useState, Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

const Cart = React.lazy(() => import("./components/Cart/Cart"));

let newQuantity = 0

function App() {
  const [showCart, setShowCart] = useState(false);
  const [product, setProduct] = useState({});

  const showCartHandler = () => {
    setShowCart((prev) => !prev);
  };

  const sendProductToCartHandler = (pro) => {
    newQuantity++;
    setProduct({...pro, quantity:newQuantity})
  };

  return (
    <div className="app">
      <Navbar onShowCart={showCartHandler} quantity={product.quantity} />
      <Products onSendProductToCart={sendProductToCartHandler} />
      <Suspense fallback={<p>loading...</p>}>
        <Cart
          cartProduct={product}
          onShowCart={showCartHandler}
          showCart={showCart}
        />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
