import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  function handleAdd() {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      event: task,
      completed: false,
    };

    setTasklist((prev) => [newTask, ...prev]);

    setTask("");
  }

  function handleDelete(id) {
    setTasklist((prev) =>
      prev.filter((t) => {
        return t.id != id;
      })
    );
  }

  function toggleComplete(id) {
    setTasklist((prev) =>
      prev.map((t) => {
        return t.id === id ? { ...t, completed: !t.completed } : t;
      })
    );
  }
  return (
    <>
      {/**input part */}
      <div>
        <h1>Manage Your Tasks</h1>

        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {/**display part */}
      <div>
        {tasklist.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
            />
            <li>{item.event}</li>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
