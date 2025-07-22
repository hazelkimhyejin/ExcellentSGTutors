import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/register', {});
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error notifying backend:', error);
      alert('Error processing registration. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Request a Tutor</h1>
      <p>Fill out the form below to connect with our expert tutors!</p>

      <h2>Step 1: Register Your Interest</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdT6bOzjvqa94L8dAkpGGHw45taEPGVbRstpdZ3L9pg1jDm2Q/viewform?embedded=true"
        width="640"
        height="2014"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        onLoad={() => console.log('Form loaded')}
      >
        Loading…
      </iframe>

      <button onClick={handleFormSubmit}>Notify Us After Form Submission</button>

      {formSubmitted && (
        <>
          <h2>Step 2: Make Payment via PayNow</h2>
          <p>Scan the QR code below to pay to POSB 039-62419-2:</p>
          <img src="https://via.placeholder.com/200?text=PayNow+QR+Code" alt="PayNow QR Code" />
          <p>After submitting the form and making payment, we will connect you with our tutors.</p>
        </>
      )}
    </div>
  );
}

export default Home;