import React from "react";
import Cart from "./body/Cart";
import styles from "../styles/Body.module.css";

const Body = () => {
  return (
    <div className={styles["body"]}>
      <h1>I am Body</h1>
      <nav>
        <ul>
          <li>laptop</li>
          <li>Smartphone</li>
        </ul>
      </nav>
      <section>
        <Cart />
      </section>
    </div>
  );
};

export default Body;
