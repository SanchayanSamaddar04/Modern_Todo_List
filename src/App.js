import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from './MyComponents/AddTodo';
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  let initTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(initTodos);

  const addTodo = (title, desc, priority, dueDate) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno,
      title,
      desc,
      priority,
      dueDate,
      completed: false
    };
    setTodos([...todos, myTodo]);
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const onToggle = (todo) => {
    setTodos(todos.map(t =>
      t.sno === todo.sno ? { ...t, completed: !t.completed } : t
    ));
  };

  const clearAllTodos = () => {
    if (window.confirm("Are you sure you want to clear all todos?")) {
      setTodos([]);
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route path="/" element={
          <div className="container">
            {/* Banner */}
            <div className="home-banner">
              <h2>Welcome to Your Todo Dashboard</h2>
              <p>Stay organized and productive with style ✨</p>
            </div>

            {/* Card Container */}
            <div className="todo-container card shadow p-4 mb-5 bg-white rounded">
              <AddTodo addTodo={addTodo} />

              {/* Progress Bar */}
              {todos.length > 0 && (
                <div className="my-3">
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${(completedCount / todos.length) * 100}%` }}
                      aria-valuenow={completedCount}
                      aria-valuemin="0"
                      aria-valuemax={todos.length}
                    ></div>
                  </div>
                </div>
              )}

              {/* Clear All Button */}
              {todos.length > 0 && (
                <div className="text-center my-3">
                  <button className="btn btn-danger btn-sm" onClick={clearAllTodos}>
                    Clear All Todos
                  </button>
                </div>
              )}

              <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
            </div>
          </div>
        } />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
