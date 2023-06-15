import React from "react";
import right_arrow from "../../assets/right-arrow.png";

const CategoryNav = () => {
  return (
    <nav>
      <ul>
        <li
          onClick={() => changeCategory("laptop")}
          className={category === "laptop" && styles["clicked"]}
        >
          {category === "laptop" && <img src={right_arrow} alt="right arrow" />}
          <span>Laptop</span>
        </li>
        <li onClick={() => changeCategory("smartphone")}>Smartphone</li>
      </ul>
    </nav>
  );
};

export default CategoryNav;
