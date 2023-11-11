import React, { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon, faXmark, faTrashCan } from "../icons";

function CartPopup({ closeCart }) {
  const { cart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".cart-popup").classList.add("open");
    }, 10);

    const handleClickOutside = (event) => {
      const cartPopup = document.querySelector(".cart-popup");
      const addToCartButtons = document.querySelectorAll(
        ".add-to-cart-plus-icon"
      );

      // Vérifie si l'élément cliqué est un bouton "+"
      const isAddToCartClick = Array.from(addToCartButtons).some((button) =>
        button.contains(event.target)
      );

      if (cartPopup && !cartPopup.contains(event.target) && !isAddToCartClick) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeCart]);

  return (
    <div className="cart-popup">
      <FontAwesomeIcon
        icon={faXmark}
        onClick={closeCart}
        className="close-cart"
      />
      <div className="cart-items-wrapper">
        {cart.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => removeFromCart(item.id)}
              className="cart-item-trash-icon"
            />
            <span>{item.name}</span>
            <span>x {item.quantity}</span>
            <span id="single-cart-item-price">
              Prix: {item.price * item.quantity}€
            </span>
          </div>
        ))}
      </div>
      <Link to="/checkout" className="validate-cart-button" onClick={closeCart}>
        <span>Valider le panier</span>
      </Link>
    </div>
  );
}

export default CartPopup;
