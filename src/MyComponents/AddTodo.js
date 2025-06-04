import React, { useState } from 'react';

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
      return;
    }
    props.addTodo(title, desc, priority, dueDate);
    setTitle("");
    setDesc("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)} className="form-select">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Add Todo</button>
      </form>
    </div>
  );
}
