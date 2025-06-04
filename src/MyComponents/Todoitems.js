import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="card my-2 p-2">
      <h5>
        <input type="checkbox" className="form-check-input me-2" checked={todo.completed} onChange={() => onToggle(todo)} />
        {todo.title}
      </h5>
      <p>{todo.desc}</p>
      <small>Priority: {todo.priority} | Due: {todo.dueDate}</small>
      <div className="text-end">
        <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(todo)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
  <div className="todo-card">
  <h5>{todo.title}</h5>
  <p>{todo.desc}</p>
</div>

}
