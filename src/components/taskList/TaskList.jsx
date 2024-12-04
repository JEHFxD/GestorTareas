import React, { useContext } from 'react';
import { TaskContext } from '../../context/taskContext/Context';

export const TaskList = () => {
  const { tasks, toggleTaskCompletion } = useContext(TaskContext);


  // Instru, estos estilos los puse aquí mismo porque ya me pareció innecesario hacerle otro CSS (Se que seguro había una mejor forma y muucho más simple pero estoy sonsa)
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px", 
            marginLeft: "10px",  
          }}
        >
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              style={{ marginRight: "10px" }} 
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                textAlign: "left", 
              }}
            >
              {task.text}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

