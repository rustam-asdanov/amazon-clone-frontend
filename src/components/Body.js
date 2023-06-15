import React, { useState } from "react";
import styles from "../styles/Body.module.css";
import Products from "./body/Products";
import CategoryNav from "./body/CategoryNav";
import productList from "../products.json";

const Body = () => {
  const [category, setCategory] = useState("laptop");

  function changeCategory(value) {
    setCategory(value);
  }

  const loadData = () => JSON.parse(JSON.stringify(productList));
  const data = loadData();
  const categoryList = Object.keys(data[0]);

  return (
    <div className={styles["body"]}>
      <h1>Top sale</h1>
      <div>
        <CategoryNav
          changeCategory={changeCategory}
          selectedCategory={category}
          categoryList={categoryList}
        />
        <Products category={category} />
      </div>
    </div>
  );
};

export default Body;
