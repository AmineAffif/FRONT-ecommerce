import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Components/Pages/HomePage';
import ProductShow from './Components/Pages/SingleProductPage';
import CartPage from './Components/Pages/CartPage';
import CheckoutPage from './Components/Pages/CheckoutPage';
import OrderSuccess from './Components/Pages/OrderSuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductShow />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
