import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/homepage';
import ResultPage from './components/Result';
import DisclaimerPopup from './components/Disclamer';
import './App.css';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
        <DisclaimerPopup />
      </div>
    </Router>
  );
}

export default App;