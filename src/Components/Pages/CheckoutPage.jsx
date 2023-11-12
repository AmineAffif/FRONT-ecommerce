import React, { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon, faTrashCan } from "../../icons";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

function CheckoutPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Créer une instance de navigate

  // Calculer le total du panier
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
      <div className="cart-summary">
        {/* Liste des produits du panier */}
        {cart.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <img
              src={`https://picsum.photos/70/70?random=${item.id}`}
              alt=""
              srcset=""
            />
            <div className="product-info-checkout">
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => removeFromCart(item.id)}
                className="cart-item-trash-icon"
              />
              <span>{item.name}</span>
              <span>x {item.quantity}</span>
              <span id="single-cart-item-price">
                {item.price * item.quantity}.00€
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Formulaire de paiement */}
      <div className="payment-form-wrapper">
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
