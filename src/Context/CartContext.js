import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existingProduct = prev.find(item => item.id === product.id);
      if (existingProduct) {
        // Augmenter la quantité si le produit existe déjà
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Ajouter un nouveau produit
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const existingProduct = prev.find(item => item.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        // Diminuer la quantité si plus d'un produit
        return prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Supprimer le produit du panier
        return prev.filter(item => item.id !== productId);
      }
    });
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
