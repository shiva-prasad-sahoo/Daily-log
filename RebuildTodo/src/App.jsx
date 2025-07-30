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
    setTasklist((prev) => prev.filter((t) => t.id !== id));
  }

  function toggleComplete(id) {
    setTasklist((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <div className="app-container">
      <h1>Manage Your Tasks</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="tasklist-section">
        {tasklist.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one!</p>
        ) : (
          <ul>
            {tasklist.map((item) => (
              <li key={item.id} className="task-item">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                />
                <span
                  className="task-text"
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.event}
                </span>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
