import React from "react";

// imported folders
import ShopName from "./header/ShopName";
import SearchBar from "./header/SearchBar";
import Cart from "./header/Cart";
import SignIn from "./header/SignIn";
import styles from "../styles/Header.module.css";

const Header = (props) => {
  return (
    <nav className={`${props.class} ${styles.navbar}`}>
      <ShopName data-testid="shop-name" />
      <SearchBar data-testid="search-bar" />
      <SignIn data-testid="sign-in" />
      <Cart data-testid="cart" />
    </nav>
  );
};

export default Header;
