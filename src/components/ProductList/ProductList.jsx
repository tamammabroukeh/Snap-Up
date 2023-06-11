import React from "react";
import "./ProductList.scss";
import Product from "../Product/Product";
export default function ProductList({ products }) {
  return (
    <div className="product-lists grid bg-whitesmoke my-3">
      {products.map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);
        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </div>
  );
}
