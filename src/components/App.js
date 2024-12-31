import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Admin from "./Admin";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import "../styles/App.css";

const App = () => {
  const [products, setProducts] = useState([
    { name: "iPhone", description: "Apple iPhone", price: 50000 },
    { name: "Galaxy", description: "Samsung Galaxy", price: 50000 },
    { name: "Pixel", description: "Google Pixel", price: 30000 },
    { name: "Mi", description: "Xiaomi Mi", price: 20000 },
    // Add more products as needed
  ]);

  const handleEdit = (index) => {
    // Implement edit functionality
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <Router>
        <nav>
          <Link to="/" className="nav-items">
            Home
          </Link>
          <Link to="/admin" className="nav-items">
            Admin
          </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <ProductList products={products} />
          </Route>
          <Route path="/products/:id">
            <ProductDetail products={products} />
          </Route>
          <Route path="/admin">
            <Admin
              products={products}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
