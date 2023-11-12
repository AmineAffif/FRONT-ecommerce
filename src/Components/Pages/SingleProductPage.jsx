import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product data: ", error));
  }, [id]);

  if (!product) {
    return <div>Chargement du produit...</div>;
  }

  return (
    <div className="single-product-page">
      <img
        src={`https://picsum.photos/400/550?random=${product.id}`}
        alt={product.name}
      />
      <div className="product-info-single">
        <h3 className="single-product-title">{product.name}</h3>
        <p className="single-product-category">{product.category.name}</p>
        <h4 className="single-product-price">{product.price}€</h4>
        <p className="single-product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, labore pariatur. Deserunt modi a quod omnis, molestiae ipsa doloribus qui amet commodi rerum unde nemo asperiores quidem facilis odit magnam.</p>
        <p className="single-product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi ut a? Fugit neque corporis, nostrum amet, odio dolor eaque perferendis alias quidem ipsa earum quibusdam tempora ex cum. Laboriosam nulla enim ducimus esse maxime natus dolore tenetur magni ut pariatur voluptatibus eos voluptatem excepturi vel cumque libero, amet corporis voluptate nostrum? Beatae minima ad, porro ducimus deserunt deleniti quae asperiores dolor pariatur unde quaerat aliquid, nam, fugit laborum sit assumenda at voluptatibus facere! Amet similique tempore quas nulla sed inventore impedit quod dolores. Ipsa expedita dolorem molestias dolorum? Aliquid possimus error iste illo sint minus neque nobis, laborum saepe.</p>
        <p className="single-product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem voluptatem temporibus sit accusantium odio obcaecati tempora modi aperiam iusto in quis, rerum architecto deserunt possimus ullam, velit rem soluta veniam delectus quidem?</p>
      </div>
    </div>
  );
}

export default SingleProductPage;
