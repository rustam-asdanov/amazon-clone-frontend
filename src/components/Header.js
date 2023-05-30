import React from "react";
import { useState } from "react";
import MyPosts from "./MyPosts";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <header>
      <h2>Nile Shop</h2>
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
