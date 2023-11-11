import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* <h1>{ JSON.stringify(product) }</h1> */}
      <h3>{ product.name} </h3>
      <p>Category: { product.category.name }</p>
      <h4>Price: ${ product.price }</h4>
    </div>
  );
};

export default ProductCard;
