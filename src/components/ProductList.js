import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/products/${index}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
