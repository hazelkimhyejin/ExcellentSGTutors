import React from 'react';
import './Home.css';

function TutorJobInterest() {
  return (
    <div className="container">
      <h1>Apply for a Tuition Job</h1>
      <p>Submit your interest for a specific tuition job posting.</p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSes2hwDdlFDTkyDrn7EcbqBgOqiU2KXqsBqPRoCVaL--lUz8A/viewform?embedded=true"
        width="640"
        height="923"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default TutorJobInterest;