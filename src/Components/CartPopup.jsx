import React, { useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importer useNavigate et Link
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon, faXmark, faTrashCan, faBagShopping } from "../icons";

function CartPopup({ closeCart }) {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    // Vérifier si un produit du panier est en rupture de stock
    const outOfStockProduct = cart.find(
      (item) => item.quantity > item.inventory
    );
    if (outOfStockProduct) {
      alert(`Désolé, ${outOfStockProduct.name} est en rupture de stock.`);
      return;
    }
    closeCart();
    navigate("/checkout");
  };

  // Mise à jour de la quantité d'un produit dans le panier
  const updateQuantity = (productId, newQuantity) => {
    const product = cart.find((item) => item.id === productId);
    if (newQuantity <= product.inventory && newQuantity > 0) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } else if (newQuantity === 0) {
      removeFromCart(product.id);
    } else {
      alert(
        `Désolé, la quantité maximale disponible ne permet pas d'en avoir plus.`
      );
    }
  };

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

      <p className="cart-popup-total-price">Total: {total}€ </p>

      <div className="cart-items-wrapper">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <FontAwesomeIcon icon={faBagShopping} />
            <p>Votre panier est vide</p>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cart-item-card" key={item.id}>
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => removeFromCart(item.id)}
                className="cart-item-trash-icon"
              />
              <strong>{item.name}</strong>
              {/* <span>x {item.quantity}</span> */}
              <div className="quantity-control">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <span id="single-cart-item-price">
                {item.price * item.quantity}.00€
              </span>
            </div>
          ))
        )}
      </div>
      <Link to="/checkout" className="validate-cart-button" onClick={closeCart}>
        <span>Valider le panier</span>
      </Link>
      <Link
        to="/checkout"
        className="validate-cart-button"
        onClick={navigateToCheckout}
      >
        <span>Valider le panier</span>
      </Link>
    </div>
  );
}

export default CartPopup;
