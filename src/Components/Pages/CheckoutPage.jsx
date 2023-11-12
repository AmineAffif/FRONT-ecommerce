import React, { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon, faTrashCan } from "../../icons";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

import StepBar from "../StepBar";

function CheckoutPage() {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Créer une instance de navigate

  // Calculer le total du panier
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [shippingInfo, setShippingInfo] = useState("");

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
      removeFromCart(product.id)
    } else {
      alert(
        `Désolé, la quantité maximale disponible ne permet pas d'en avoir plus.`
      );
    }
  };

  // États pour les informations de paiement
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "cardNumber") {
      // Retirer tous les espaces existants
      newValue = newValue.replace(/\s+/g, "");

      // Ajouter un espace tous les 4 chiffres
      newValue = newValue.match(/.{1,4}/g)?.join(" ") ?? newValue;

      // Limiter à 16 chiffres (4 groupes de 4)
      newValue = newValue.slice(0, 19);
    }
    setPaymentInfo({ ...paymentInfo, [name]: newValue });
  };

  const handlePayment = () => {
    // Validations
    if (
      !isValidText(paymentInfo.cardName) ||
      !isValidText(paymentInfo.cardNumber) ||
      !(paymentInfo.cardNumber.length === 19) ||
      !isValidText(paymentInfo.expiryDate) ||
      !isValidNumber(paymentInfo.cvv) ||
      !(paymentInfo.cvv.length === 3)
    ) {
      alert("Veuillez remplir correctement tous les champs.");
      return;
    }
    // Préparer les données de la commande
    const orderData = {
      order: {
        total_price: total,
        status: "en attente", // ou tout autre statut initial
        order_date: new Date().toISOString(),
        order_items_attributes: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    };

    // Envoyer les données à l'API
    axios
      .post("http://localhost:3000/orders", orderData)
      .then((response) => {
        navigate("/order-success"); // Rediriger vers OrderSuccessPage
      })
      .catch((error) => {
        // Gérer les erreurs
      });
  };

  const isValidText = (text) => {
    console.log(text.trim() !== "");
    return text.trim() !== "";
  };

  const isValidNumber = (number) => {
    console.log(number.trim() !== "" && !isNaN(number));
    return number.trim() !== "" && !isNaN(number);
  };

  return (
    <div className="checkout-page">
      <StepBar />
      <div className="cart-summary">
        <h2 className="page-title">Panier</h2>
        {/* Liste des produits du panier */}
        {cart.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <img
              src={`https://picsum.photos/70/70?random=${item.id}`}
              alt=""
            />
            <div className="product-info-checkout">
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => removeFromCart(item.id)}
                className="cart-item-trash-icon"
              />
              <span>{item.name}</span>
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
          </div>
        ))}
      </div>
      <div className="payment-form-wrapper">
        {/* Formulaire de livraison */}
        <h2 className="page-title">Livraison</h2>
        <div className="shipping">
          <label htmlFor="name_firstname">Nom Prénom</label>
          <input
            type="text"
            name="name_firstname"
            onChange={handleInputChange}
            placeholder="Nom Prénom"
          />
          <label htmlFor="address">Numéro et voie</label>
          <input
            type="text"
            name="address"
            onChange={handleInputChange}
            placeholder="Adresse"
          />
          <label htmlFor="address_complement">Complément d'adresse</label>
          <input
            type="text"
            name="address_complement"
            onChange={handleInputChange}
            placeholder="Étage, logement..."
          />
          <label htmlFor="postal_code">Code postale</label>
          <input
            type="text"
            name="postal_code"
            onChange={handleInputChange}
            placeholder="Code postale"
          />
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            name="city"
            onChange={handleInputChange}
            placeholder="Ville"
          />
        </div>
        {/* Formulaire de paiement */}
        <h2 className="page-title">Paiement</h2>
        <div className="payment-form">
          <input
            type="text"
            name="cardName"
            value={paymentInfo.cardName}
            onChange={handleInputChange}
            placeholder="Nom"
          />
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            maxLength="19" // 16 chiffres + 3 espaces
            placeholder="Numéro de la carte"
          />

          <input
            type="date"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleInputChange}
            placeholder="Date d'expiration"
          />
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleInputChange}
            maxLength="3"
            placeholder="CVV"
          />
          <button onClick={handlePayment}>Payer</button>
        </div>
        <p id="total-price-checkout">Total: {total}€</p>
      </div>
    </div>
  );
}

export default CheckoutPage;
