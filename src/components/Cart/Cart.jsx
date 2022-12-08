import { GrFormClose } from "react-icons/gr";
import { formatNumbers } from "../Products/ProductItem";

let content;

const Cart = ({ cartProduct, showCart, onShowCart }) => {
  if (cartProduct.quantity === undefined) {
    content = (
      <>
        <p className="emptyCart">Empty cart! let's buy something...</p>
        <div className="total">
          <span>
            total: 0<span>LE</span>
          </span>
        </div>
      </>
    );
  } else {
    const totalPrice = cartProduct.quantity * cartProduct.price;
    content = (
      <>
        <div key={1} className="cartItem">
          <div className="img">
            <img src={cartProduct.imgs[0]} alt={""} />
          </div>
          <div className="info">
            <p>{cartProduct.title}</p>
            <span>{`Quantity: ${cartProduct.quantity}`}</span>
            <div className="price">
              <span>
                {`${formatNumbers(cartProduct.price)}`}
                <span>LE</span>
              </span>
            </div>
          </div>
        </div>
        <div className="total">
          <span>
            total: {`${formatNumbers(totalPrice)}`}
            <span>LE</span>
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      {showCart && <div className="overlay" onClick={onShowCart} />}
      <div
        className="cart"
        style={{
          right: showCart ? "0" : "-100%",
        }}
      >
        <div className="close" onClick={onShowCart}>
          <GrFormClose />
        </div>
        <h3>my cart</h3>
        <span>cart summary</span>
        {content}
        <div className="btns">
          <button>Review cart</button>
          <button>complete checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
