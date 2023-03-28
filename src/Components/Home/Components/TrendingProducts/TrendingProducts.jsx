import React, { useContext, useEffect, useState } from "react";
import ProductCard2 from "../ProductCard2/ProductCard2";
import styles from "./TrendingProducts.module.css";
import ProductContext from "../../../ProductContext";

const TrendingProducts = () => {
  const productContext = useContext(ProductContext);

  const [filtre, setFiltre] = useState("all");

  const [filtredProducts, setFiltredProducts] = useState(
    productContext.state.products
  );

  useEffect(() => {
    let filtredProducts = productContext.state.products.filter((product) => {
      if (filtre === "all") return product;
      return product.category == filtre;
    });
    setFiltredProducts(filtredProducts);
  }, [filtre]);

  return (
    <section className={styles.trending_products}>
      <div className="max_width">
        <div className={styles.titles}>
          <h3>Trending Products</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.filtres}>
          <button
            className={`primary_btn ${filtre === "all" ? styles.active : ""}`}
            onClick={() => {
              setFiltre("all");
            }}
          >
            All Products
          </button>
          <button
            className={`primary_btn ${
              filtre === "Trending Products" ? styles.active : ""
            }`}
            onClick={() => {
              setFiltre("Trending Products");
            }}
          >
            Trending Products
          </button>
          <button
            className={`primary_btn ${
              filtre === "Special Products" ? styles.active : ""
            }`}
            onClick={() => {
              setFiltre("Special Products");
            }}
          >
            Special Products
          </button>
          <button
            className={`primary_btn ${
              filtre === "Featured Products" ? styles.active : ""
            }`}
            onClick={() => {
              setFiltre("Featured Products");
            }}
          >
            Featured Products
          </button>
        </div>
        <div className={styles.container}>
          {filtredProducts.length > 0 &&
            filtredProducts.map((product) => {
              return <ProductCard2 key={product.id} product={product} />;
            })}
        </div>
        <div className={styles.view_all}>
          <button className="primary_btn">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
