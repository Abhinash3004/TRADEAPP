import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

//import MainPage from '../src/components/MainPage';
import './App.css';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="components/MainPage" element={<Sidebar />} /> {/* This is your homepage route */}
      </Routes>
    </Router>
    );
}

export default App;
