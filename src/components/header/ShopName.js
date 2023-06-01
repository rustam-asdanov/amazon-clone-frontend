import React from "react";
import shop_icon from "../../assets/store_icon.png";
import styles from "../../styles/header/ShopName.module.css";

const ShopName = () => {
  return (
    <div className={styles["title"]}>
      <img src={shop_icon} alt="store icon" className={styles["shop-icon"]} />
      <h1>Nile Shop</h1>
    </div>
  );
};

export default ShopName;
