import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (title && description) {
      const newTasks = tasks.slice(); // Copy the current tasks array
      newTasks.push({ title: title, description: description }); // Add new task
      setTasks(newTasks); // Update the state
      setTitle("");
      setDescription("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.slice(); // Copy the current tasks array
    newTasks.splice(index, 1); // Remove the task at the given index
    setTasks(newTasks); // Update the state
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="input-title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="input-description"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-content">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
            <button onClick={() => deleteTask(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
