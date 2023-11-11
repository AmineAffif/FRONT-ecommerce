import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';

import './Styles/App.css';

import HomePage from './Components/Pages/HomePage';
import SingleProductPage from './Components/Pages/SingleProductPage';
import CartPage from './Components/Pages/CartPage';
import CheckoutPage from './Components/Pages/CheckoutPage';
import OrderSuccess from './Components/Pages/OrderSuccessPage';
import Header from './Components/Header';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
