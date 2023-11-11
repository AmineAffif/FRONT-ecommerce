import React, { useState } from "react";
import { FontAwesomeIcon, faCartShopping } from "../icons";
import CartPopup from "./CartPopup";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    if (isCartOpen) {
      // Informer CartPopup de commencer l'animation de fermeture
      document.querySelector('.cart-popup').classList.remove('open');
      // Attendre la fin de l'animation avant de changer l'état
      setTimeout(() => setIsCartOpen(false), 450);
    } else {
      setIsCartOpen(true);
    }
  };

  return (
    <div className="header">
      <FontAwesomeIcon icon={faCartShopping} className="cart-header-icon" onClick={toggleCart} />
      {isCartOpen && <CartPopup closeCart={toggleCart} />}
    </div>
  );
}

export default Header;
