import React from "react";
import styles from "../../styles/header/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <input
        className={styles.search}
        type="text"
        data-testid="search-bar-input"
        placeholder="Search in Nile"
      />
    </div>
  );
};

export default SearchBar;
