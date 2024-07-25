import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput) {
      const newTasks = tasks.slice(); //copy the current tasks array
      newTasks.push(taskInput); // Add new task
      setTasks(newTasks); // Update the state
      setTaskInput(""); // Clear the input field
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
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter Task"
          className="input-title"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-content">
              <h2>{task}</h2>
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
