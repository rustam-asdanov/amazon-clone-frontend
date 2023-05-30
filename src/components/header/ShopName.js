import React from "react";
import shop_icon from "../../assets/store_icon.png";
import styles from "../../styles/header/ShopName.module.css";

const ShopName = () => {
  return (
    <div className={styles["title"]}>
      <h1>Nile Shop</h1>
      <img src={shop_icon} alt="store icon" className={styles["shop-icon"]} />
    </div>
  );
};

export default ShopName;
