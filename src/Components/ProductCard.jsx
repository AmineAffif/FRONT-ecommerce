import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importer Link
import { FontAwesomeIcon, faPlus } from "../icons";
import { CartContext } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // URL de l'image avec un paramètre unique pour chaque produit
  const imageUrl = `https://picsum.photos/200/250?random=${product.id}`;

  const handleAddToCart = (event) => {
    event.stopPropagation(); // Empêche la redirection lors de l'ajout au panier
    addToCart(product);
  };

  return (
    <div className="product-card">
      {product.inventory > 0 && (
        <FontAwesomeIcon
          icon={faPlus}
          className="add-to-cart-plus-icon"
          onClick={handleAddToCart}
        />
      )}
      <Link to={`/product/${product.id}`}>
        <img src={imageUrl} alt="" />
        <h3>{product?.name}</h3>
        <p>Categorie: {product?.category?.name}</p>
        <h4>Prix: {product?.price}€</h4>
      </Link>
    </div>
  );
};

export default ProductCard;
