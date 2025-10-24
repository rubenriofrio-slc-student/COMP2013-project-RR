import React from "react";
import QuantityCounter from "./QuantityCounter";

function CartCard({ item, onQtyChange, onRemove }) {
  const { id, productName, image, price, quantity } = item;
  const subTotal = (price * quantity).toFixed(2);

  return (
    <div className="CartCard">
      <img src={image} alt={productName} />
      <div className="CartCardInfo">
        <div><strong>{productName}</strong></div>
        <div>${price.toFixed(2)} • Subtotal: ${subTotal}</div>

        
        <QuantityCounter
          quantity={quantity}
          min={1}
          onIncrease={() => onQtyChange(id, quantity + 1)}
          onDecrease={() => quantity > 1 && onQtyChange(id, quantity - 1)}
        />
      </div>

      <button className="RemoveButton" onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
}

export default CartCard;