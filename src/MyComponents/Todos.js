import React from 'react';
import TodoItem from './Todoitems';

export default function Todos({ todos, onDelete, onToggle }) {
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="container">
      <h3>Todos List</h3>

      {/* ✅ Progress Bar */}
      {totalCount > 0 && (
        <div className="progress my-3">
          <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {todos.length === 0 ? (
        "No Todos to display"
      ) : (
        todos.map(todo => (
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} onToggle={onToggle} />
        ))
      )}
    </div>
  );
}
