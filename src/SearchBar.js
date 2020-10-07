import React from "react";

function SearchBar(props) {
  const handleChange = event => {
    props.setQuery(event.target.value);
  };
  return (
    <div>
      <label>Search :</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
