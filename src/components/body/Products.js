import React from "react";
import Card from "./Card";
import styles from "../../styles/body/Products.module.css";

const Products = (props) => {
  return (
    <div className={styles["products"]}>
      {props.products.map((elem) => (
        <Card
          key={elem.brand}
          brand={elem.brand}
          model={elem.model}
          price={elem.price}
        />
      ))}
    </div>
  );
};

export default Products;
