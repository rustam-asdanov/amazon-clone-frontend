import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        data-testid="search-bar-input"
        placeholder="Search in Nile"
      />
    </div>
  );
};

export default SearchBar;
