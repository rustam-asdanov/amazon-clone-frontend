import React from "react";
import { useState } from "react";

// imported folders
import MyPosts from "./MyPosts";
import ShopName from "./header/ShopName";
import SearchBar from "./header/SearchBar";
import Cart from "./header/Cart";
import SignIn from "./header/SignIn";
import styles from "../styles/Header.module.css";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <nav className={`${props.class} ${styles.navbar}`}>
      <ShopName data-testid="shop-name" />
      <SearchBar data-testid="search-bar" />
      <SignIn data-testid="sign-in" />
      <Cart data-testid="cart" />
      {/* {!show && <p>Not Clicked</p>}
      {show && <div>Clicked</div>}
      <button type="button" onClick={toggleShow}>
        Click
      </button>
      <MyPosts /> */}
    </nav>
  );
};

export default Header;
