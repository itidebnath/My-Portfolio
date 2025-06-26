
import React from 'react';
import './Project.css';

export default function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
       <ul>
        <li>
          <strong>Portfolio Website</strong> – A responsive React-based website showcasing my skills and projects.
        </li>
        <li>
          <strong>Todo List App</strong> – Built with React; allows users to add, mark, and delete tasks with local storage support.
        </li>
        <li>
          <strong>Weather App</strong> – Uses OpenWeather API to fetch real-time weather data for any city.
        </li>
        <li>
          <strong>Blog Page UI</strong> – Designed using HTML & CSS with clean layout, responsive design, and attractive color scheme.
        </li>
      </ul>
      <p>
        More projects are coming soon as I continue learning and building!
      </p>
    </div>
  );
}
