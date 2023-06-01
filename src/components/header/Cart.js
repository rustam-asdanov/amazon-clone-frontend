import React from "react";
import cart from "../../assets/cart.png";
import { Button } from "react-bootstrap";
import styles from "../../styles/header/Cart.module.css";

const Cart = () => {
  return (
    <Button variant="light" className={styles["cart-button"]}>
      <span className={styles["cart-amount"]}>0</span>
      <img src={cart} alt="cart" className={styles["cart-icon"]} />
    </Button>
  );
};

export default Cart;
