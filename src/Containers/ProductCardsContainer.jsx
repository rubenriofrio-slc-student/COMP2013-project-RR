import React from "react";
import ProductCard from "./ProductCard";

function ProductCardsContainer({ products, addToCart }) {
  return (
    <div className="ProductsContainer">
      {products.map(p => (
        <div key={p.id} className="ProductCard">
          <ProductCard product={p} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}
export default ProductCardsContainer;
