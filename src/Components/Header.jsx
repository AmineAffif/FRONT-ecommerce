import React, { useState, useEffect } from "react";

import { FontAwesomeIcon, faCartShopping, faHouse, faSun } from "../icons";
import CartPopup from "./CartPopup";
import { Link } from "react-router-dom";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

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

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="header">
      <FontAwesomeIcon
        icon={faSun}
        className={`header-icon ${darkMode ? 'dark-mode-icon' : ''}`}
        onClick={() => setDarkMode(!darkMode)}
      />

      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="header-icon" />
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
