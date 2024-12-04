import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/taskContext/Context';
import './TaskForm.css';

export const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <textarea
        className="task-textarea"
        placeholder="Nueva tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="task-button">
        Agregar
      </button>
    </form>
  );
};
