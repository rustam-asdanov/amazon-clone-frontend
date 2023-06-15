import React from "react";
import right_arrow from "../../assets/right-arrow.png";
import styles from "../../styles/body/CategoryNav.module.css";

const CategoryNav = (props) => {
  return (
    <nav>
      <ul>
        {props.categoryList.map((category) => {
          return (
            <li onClick={() => props.changeCategory(category)}>
              {props.selectedCategory === category && (
                <img src={right_arrow} alt="right arrow" />
              )}
              <span>{category}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryNav;
