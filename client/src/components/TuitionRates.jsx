import React from 'react';
import './Home.css';

function TuitionRates() {
  return (
    <div className="container">
      <h1>Tuition Rates</h1>
      <p>Explore our competitive tuition rates tailored to your needs:</p>
      <ul>
        <li>Part-time Tutors (Undergraduates): SGD 50–80/hour</li>
        <li>Full-time Tutors (Graduates): SGD 80–120/hour</li>
        <li>Ex-/Current MOE Teachers: SGD 120–150/hour</li>
      </ul>
      <p>Notes: Rates may vary based on experience and subject. Contact us for a personalized quote!</p>
    </div>
  );
}

export default TuitionRates;