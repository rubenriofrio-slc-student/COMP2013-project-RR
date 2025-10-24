import React, { useState } from "react";
import cartEmpty from "../assets/cart-empty.png";
import cartFull from "../assets/cart-full.png";

function NavBar({ username, cartCount }) {
  const cartIcon = cartCount > 0 ? cartFull : cartEmpty;

  return (
    <div className="NavBar"    >
      <h2>🛒 Grocery App</h2>
      <p>Welcome, {username}!</p>
      <img
        src={cartIcon}
        alt="Cart"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
}

export default NavBar;
