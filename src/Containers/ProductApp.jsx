import React, { useState } from "react";
import ProductCardsContainer from "../Containers/ProductCardsContainer";
import { products } from "../data/products";


function ProductApp() {
  const [cart, setCart] = useState([]);

 
  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please add at least one item!");
      return;
    }

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h1>🛒 Grocery Store</h1>
      <p>Items in cart: {cart.length}</p>

      
      <ProductCardsContainer products={products} addToCart={addToCart} />

      
      <div style={{ marginTop: "20px" }}>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.quantity} × ${item.price.toFixed(2)} = $
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <button onClick={emptyCart}>Empty Cart</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductApp;
