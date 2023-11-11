import React, { useContext } from 'react';
import { FontAwesomeIcon, faPlus } from "../icons";
import { CartContext } from '../Context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      {/* <h1>{ JSON.stringify(product) }</h1> */}
      <h3>{ product.name} </h3>
      <p>Categorie: { product.category.name }</p>
      <h4>Prix: { product.price }€</h4>
      <FontAwesomeIcon icon={faPlus} className='add-to-cart-plus-icon' onClick={() => addToCart(product)} />
    </div>
  );
};

export default ProductCard;
