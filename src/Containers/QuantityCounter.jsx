import React from "react";

function QuantityCounter({ quantity, onIncrease, onDecrease, min = 0 }) {
  return (
    <div className="QuantityCounter">
      <button
        className="QuantityButton"
        onClick={onDecrease}
        disabled={quantity <= min}
      >
        -
      </button>
      <span className="QuantityValue">{quantity}</span>
      <button className="QuantityButton" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
