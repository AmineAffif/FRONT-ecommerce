import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; // Un composant pour afficher chaque produit

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Début du chargement
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false); // Fin du chargement
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, []);

  return (
    <div className="products-grid-wrapper">
      <input
        type="text"
        className="search-bar"
        placeholder="Rechercher un produit"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading ? (
        <div className="loader"></div> // Affichage du loader
      ) : (
        <div className="products-grid">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
