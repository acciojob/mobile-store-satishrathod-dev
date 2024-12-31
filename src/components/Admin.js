import React, { useState } from "react";

const Admin = ({ products, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({ name: "", price: "" });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setUpdatedProduct(products[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onEdit(editIndex, updatedProduct);
    setEditIndex(null);
    setUpdatedProduct({ name: "", price: "" });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <ul className="admin-list">
        {products.map((product, index) => (
          <li key={index}>
            {product.name}
            <button className="btn" onClick={() => handleEditClick(index)}>
              Edit
            </button>
            <button className="btn" onClick={() => onDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {editIndex !== null && (
        <div className="edit-form">
          <h2>Edit Product</h2>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
            placeholder="Product Price"
          />
          <button className="btn" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
