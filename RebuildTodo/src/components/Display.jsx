import React from "react";
import DisplayCards from "./DisplayCards";

function Display({ task }) {
  return (
    <div>
      <DisplayCards task={task} />
    </div>
  );
}

export default Display;
