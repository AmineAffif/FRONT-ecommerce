import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error('Error fetching product data: ', error));
  }, [id]);

  if (!product) {
    return <div>Chargement du produit...</div>;
  }

  return (
    <>
      <div>Produit</div>
      <div>Affichage du produit {id}</div>
      <img src={`https://picsum.photos/400/550?random=${product.id}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Catégorie: {product.category.name}</p>
      <h4>Prix: {product.price}€</h4>
      {/* Ajouter plus de détails du produit ici si nécessaire */}
    </>
  );
}

export default SingleProductPage;
