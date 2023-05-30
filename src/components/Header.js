import React from "react";
import { useState } from "react";

// imported folders
import MyPosts from "./MyPosts";
import ShopName from "./header/ShopName";
import SearchBar from "./header/SearchBar";
import Cart from "./header/Cart";
import SignIn from "./header/SignIn";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <header>
      <ShopName />
      <SearchBar />
      <SignIn />
      <Cart />
      {!show && <p>Not Clicked</p>}
      {show && <div>Clicked</div>}
      <button type="button" onClick={toggleShow}>
        Click
      </button>
      <MyPosts />
    </header>
  );
};

export default Header;
