import React, { useState } from "react";
import { FontAwesomeIcon, faCartShopping, faHouse } from "../icons";
import CartPopup from "./CartPopup";
import { Link } from "react-router-dom";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    if (isCartOpen) {
      // Informer CartPopup de commencer l'animation de fermeture
      document.querySelector(".cart-popup").classList.remove("open");
      // Attendre la fin de l'animation avant de changer l'état
      setTimeout(() => setIsCartOpen(false), 450);
    } else {
      setIsCartOpen(true);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <FontAwesomeIcon
          icon={faHouse}
          className="header-icon"
        />
      </Link>
      <FontAwesomeIcon
        icon={faCartShopping}
        className="header-icon"
        onClick={toggleCart}
      />
      {isCartOpen && <CartPopup closeCart={toggleCart} />}
    </div>
  );
}

export default Header;
