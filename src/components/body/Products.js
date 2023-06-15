import React from "react";
import Card from "./Card";
import styles from "../../styles/body/Products.module.css";

const Products = () => {
  return (
    <div className={styles["products"]}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Products;
