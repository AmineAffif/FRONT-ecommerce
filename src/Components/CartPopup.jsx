import React, { useEffect } from 'react';

function CartPopup({ closeCart }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.cart-popup').classList.add('open');
    }, 10);

    const handleClickOutside = (event) => {
      const cartPopup = document.querySelector('.cart-popup');
      if (cartPopup && !cartPopup.contains(event.target)) {
        closeCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeCart]);

  return (
    <div className='cart-popup'>
      <button className="close-cart" onClick={closeCart}>Fermer</button>
      {/* Contenu du panier ici */}
    </div>
  );
}

export default CartPopup;
