import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import SuperBowl56 from './pages/SuperBowl56';

function App() {

  return(

    <div>
      <Router >
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/SuperBowl56" element={<SuperBowl56 />} />

        </Routes>
        
      </Router>
    </div>

  );
}

export default App;
