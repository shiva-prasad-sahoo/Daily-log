import { useState } from "react";
import "./App.css";

function TaskItem({ item, onDelete, onToggle }) {
  return (
    <li className="task-item">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
        />
        <span
          className="task-text"
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            opacity: item.completed ? 0.6 : 1,
          }}
        >
          {item.event}
        </span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}

function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      event: task.trim(),
      completed: false,
    };

    setTasklist((prev) => [newTask, ...prev]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTasklist((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasklist((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="app-container">
      <h1>Manage Your Tasks</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button onClick={handleAdd} disabled={task.trim() === ""}>
          Add
        </button>
      </div>

      <div className="tasklist-section">
        {tasklist.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one!</p>
        ) : (
          <ul className="task-list">
            {tasklist.map((item) => (
              <TaskItem
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onToggle={toggleComplete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
