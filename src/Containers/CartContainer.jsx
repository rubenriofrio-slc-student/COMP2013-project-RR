import React from "react";
import CartCard from "./CartCard";

function CartContainer({ cart, onQtyChange, onRemove, onEmptyCart }) {
  const items = cart.length; 
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="CartContainer">
      <div className="CartHeader">
        <strong>Cart Items: {items}</strong>
        <span>Total: ${total.toFixed(2)}</span>
      </div>

      {cart.length === 0 ? (
        <div className="CartEmpty">No items in the cart</div>
      ) : (
        <>
          <div className="CartList">
            {cart.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                onQtyChange={onQtyChange}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="CartActions CartListBtns">
            <button className="RemoveButton" onClick={onEmptyCart}>
              Empty Cart
            </button>
            <button id="BuyButton">Checkout • ${total.toFixed(2)}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;