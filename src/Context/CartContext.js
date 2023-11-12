import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existingProduct = prev.find(item => item.id === product.id);
      if (existingProduct) {
        // Ne pas augmenter la quantité si le stock maximum est atteint
        if (existingProduct.quantity < product.inventory) {
          return prev.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return prev;
      } else {
        // Ajouter un nouveau produit
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        return item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 }
          : null;
      }
      return item;
    }).filter(item => item !== null));
  };



  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
