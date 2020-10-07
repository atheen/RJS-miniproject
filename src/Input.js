import React, { useState } from "react";

function Input(props) {
  const [newMovie, setNewMovie] = useState("");
  const handleClick = () => {
    console.log("clicked");

    props.setWatchList([...props.watchList, newMovie]);
  };
  const handleChange = event => {
    setNewMovie(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>+ Add</button>
    </div>
  );
}

export default Input;
