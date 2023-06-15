import React from "react";
import { Button } from "react-bootstrap";
import account_icon from "../../assets/add-user.png";
import styles from "../../styles/header/SignIn.module.css";

const SignIn = () => {
  return (
    <Button variant="light">
      <img
        src={account_icon}
        alt="account-icon"
        className={styles["account-icon"]}
      />
    </Button>
  );
};

export default SignIn;
