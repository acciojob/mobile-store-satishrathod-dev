import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
