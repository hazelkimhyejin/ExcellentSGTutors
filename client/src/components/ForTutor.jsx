import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function ForTutor() {
  return (
    <div className="container">
      <h1>For Tutors</h1>
      <p>Join our team or apply for tutoring jobs:</p>
      <ul>
        <li><Link to="/tutor-register">Register as a Tutor</Link></li>
        <li><Link to="/job-interest">Apply for a Job</Link></li>
      </ul>
      <p>Explore opportunities to teach with Excellent SG Tutors!</p>
    </div>
  );
}

export default ForTutor;