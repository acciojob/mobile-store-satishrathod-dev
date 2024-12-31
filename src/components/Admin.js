import React from "react";

const Admin = ({ products, onEdit, onDelete }) => {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <ul className="admin-list">
        {products.map((product, index) => (
          <li key={index}>
            {product.name}
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
