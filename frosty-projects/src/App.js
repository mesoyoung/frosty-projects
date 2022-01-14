import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' />
        {/* <Route path='/' element={<Home/>} /> */}
      </Routes>
    </Router>
      
    </>
      
  );
}

export default App;
