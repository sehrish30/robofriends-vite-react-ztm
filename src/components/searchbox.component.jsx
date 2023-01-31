import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <React.Fragment>
      <input
        onChange={searchChange}
        type="search"
        placeholder="seacrh robots"
      />
    </React.Fragment>
  );
};

export default SearchBox;
