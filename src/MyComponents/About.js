import React from 'react';

export const About = () => {
  return (
    <div className="container my-5">
      {/* Card with about content */}
      <div className="card about-card shadow p-4 mb-5 bg-white rounded text-center">
        <h3 className="mb-4">About This App</h3>
        <p className="lead">
          This is a simple yet powerful React Todo app to help you organize your tasks efficiently.
        </p>
        
        <h4 className="mt-4">Features</h4>
        <ul className="list-unstyled mt-3">
          <li>✅ Create, delete and manage todos</li>
          <li>📦 Store todos in localStorage</li>
          <li>📱 Responsive UI using Bootstrap</li>
          <li>📊 Progress bar for task completion</li>
          <li>🔀 Routing with React Router</li>
        </ul>
      </div>
    </div>
  );
};
