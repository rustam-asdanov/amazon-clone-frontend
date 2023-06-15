import React from "react";
import styles from "../../styles/body/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles["card"]}>
      <img
        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-silver-gallery1-202206?wid=2000&hei=1537&fmt=jpeg&qlt=95&.v=1664558461707"
        alt="mac-laptop"
      />
      <h3>
        {props.brand} {props.model}
      </h3>
      <span>{props.price}$</span>
    </div>
  );
};

export default Card;
