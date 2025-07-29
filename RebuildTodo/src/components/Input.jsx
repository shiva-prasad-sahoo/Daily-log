import React from "react";
import { useState } from "react";
import DisplayCards from "./DisplayCards";

function Input() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  function handleAdd() {
    if (task === "") return; //prevent empty task
    setTasklist([...tasklist, task]); //adding task to tasklist array
    setTask(""); //clear input feild
  }
  return (
    <div>
      <h2>Manage Your Daily Tasks</h2>
      <input
        type="text"
        name="inputfeild"
        id=""
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="submit" onClick={handleAdd}>
        Add
      </button>
      tasklist.map((item,index)=(
      <DisplayCards index={index} item={item} tasklist={tasklist} setTasklist />
      ))
    </div>
  );
}

export default Input;
