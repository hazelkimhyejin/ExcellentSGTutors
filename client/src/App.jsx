import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TuitionRates from './components/TuitionRates';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ForTutor from './components/ForTutor';
import TutorRegister from './components/TutorRegister';
import TutorJobInterest from './components/TutorJobInterest';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.jpg" alt="Excellent SG Tutors Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Request a tutor</Link></li>
          <li><Link to="/tuition-rates">Tuition Rates</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/for-tutor">For Tutor</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tuition-rates" element={<TuitionRates />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/for-tutor" element={<ForTutor />} />
        <Route path="/tutor-register" element={<TutorRegister />} />
        <Route path="/job-interest" element={<TutorJobInterest />} />
      </Routes>
    </Router>
  );
}

export default App;