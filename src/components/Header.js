import React from "react";
import { useState } from "react";

// imported folders
import MyPosts from "./MyPosts";
import ShopName from "./header/ShopName";
import SearchBar from "./header/SearchBar";
import Cart from "./header/Cart";
import SignIn from "./header/SignIn";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <nav className={`${props.class} navbar`}>
      <ShopName />
      <SearchBar />
      <SignIn />
      <Cart />
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
