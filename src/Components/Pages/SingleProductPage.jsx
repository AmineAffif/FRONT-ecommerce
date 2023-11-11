import React from "react";
import { useParams } from "react-router-dom";

function ProductShow() {
  const { id } = useParams(); // Récupère l'ID du produit depuis l'URL

  return (
    <>
      <div>Produit</div>
      <div>Affichage du produit {id}</div>
    </>
  );
}

export default ProductShow;
