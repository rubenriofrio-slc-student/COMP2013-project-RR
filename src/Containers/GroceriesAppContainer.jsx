import React, { useState } from "react";
import products from "../data/products"; 
import NavBar from "./NavBar";
import ProductsContainer from "./ProductCardsContainer";
import CartContainer from "./CartContainer";

function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty) => {
    if (qty <= 0) return alert("Select a quantity first");
    const found = cart.find((c) => c.id === product.id);
    if (found) {
      setCart(cart.map((c) =>
        c.id === product.id ? { ...c, quantity: c.quantity + qty } : c
      ));
    } else {
      const priceNum = typeof product.price === "string"
        ? parseFloat(product.price.replace("$",""))
        : product.price;
      setCart([...cart, { ...product, price: priceNum, quantity: qty }]);
    }
  };

  const onQtyChange = (id, q) =>
    setCart(cart.map((c) => (c.id === id ? { ...c, quantity: q } : c)));
  const onRemove    = (id) => setCart(cart.filter((c) => c.id !== id));
  const onEmptyCart = () => setCart([]);

  const cartCount = cart.reduce((n, c) => n + c.quantity, 0);

  return (
    <div>
      <NavBar username="Ruben" cartCount={cartCount} />
      
      <div className="GroceriesApp-Container">
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          onQtyChange={onQtyChange}
          onRemove={onRemove}
          onEmptyCart={onEmptyCart}
        />
      </div>
    </div>
  );
}

export default GroceriesAppContainer;
