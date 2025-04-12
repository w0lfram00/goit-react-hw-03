import React from "react";

const SearchBox = ({ setSearchName }) => {
  return (
    <div>
      <label>
        <p>Find contacts by name</p>
        <input
          onChange={(e) => {
            setSearchName(e.target.value.toLowerCase().trim());
          }}
          type="text"
        />
      </label>
    </div>
  );
};

export default SearchBox;
