import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <img src={product.image} alt={product.productName} />
      <h4>{product.productName}</h4>
      <div>{product.brand}</div>
      <div>{product.quantity}</div>
      <div>{product.price}</div>

      <QuantityCounter
        quantity={quantity}
        min={0}
        onIncrease={() => setQuantity(quantity + 1)}
        onDecrease={() => setQuantity(Math.max(0, quantity - 1))}
      />

      <button onClick={() => addToCart(product, quantity)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
