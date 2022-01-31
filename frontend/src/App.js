import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import HomePageTitle from './components/HomePageTitle';

function App() {

  return(

    <div>
      <Router >
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamPage />} />

        </Routes>
        
      </Router>
    </div>

  );
}

export default App;
