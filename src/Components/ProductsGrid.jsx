import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; // Un composant pour afficher chaque produit

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Début du chargement
    axios
      .get(`http://localhost:3000/products?page=${currentPage}`)
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(response.data.total_pages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, [currentPage]);

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
          {Array.isArray(products) &&
            products
              .filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      )}
      <div className="pagination-container">
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Page précédente
        </button>

        <span>
          Page {currentPage} sur {totalPages}
        </span>

        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Page suivante
        </button>
      </div>
    </div>
  );
};

export default ProductsGrid;
