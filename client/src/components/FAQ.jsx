import React from 'react';
import './Home.css';

function FAQ() {
  return (
    <div className="container">
      <h1>FAQ</h1>
      <p>Common questions about our tutoring services:</p>
      <ul>
        <li><strong>How do I request a tutor?</strong> Fill out the form on our "Request a tutor" page.</li>
        <li><strong>What are the payment options?</strong> We accept PayNow to POSB 309-62419-2.</li>
        <li><strong>Can tutors teach online?</strong> Yes, we offer online, in-person, and hybrid options.</li>
      </ul>
      <p>Contact us at excellentsgtutors@gmail.com for more details!</p>
    </div>
  );
}

export default FAQ;