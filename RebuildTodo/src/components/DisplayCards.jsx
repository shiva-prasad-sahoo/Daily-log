import React from "react";
import tasklist from "./Input";

function DisplayCards({ index, item, tasklist, setTasklist }) {
  function handleDelete() {
    const trimmedlist = tasklist.filter((val, i) => i !== index);

    setTasklist(trimmedlist);
  }
  return (
    <div>
      <li key={index}>{item}</li>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DisplayCards;
