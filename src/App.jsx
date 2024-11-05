import React from 'react';
import './styles.css';
import Navbar from './assets/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
