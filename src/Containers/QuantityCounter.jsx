import React, { useState } from "react";

function QuantityCounter({ quantity, onIncrease, onDecrease, min = 0 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <button onClick={onDecrease} disabled={quantity <= min}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default QuantityCounter;
