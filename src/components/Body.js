import React, { useState } from "react";
import styles from "../styles/Body.module.css";
import Products from "./body/Products";
import CategoryNav from "./body/CategoryNav";

const Body = () => {
  const [category, setCategory] = useState("laptop");

  function changeCategory(value) {
    setCategory(value);
  }

  return (
    <div className={styles["body"]}>
      <h1>Top sale</h1>
      <div>
        <CategoryNav />
        <Products category={category} />
      </div>
    </div>
  );
};

export default Body;
