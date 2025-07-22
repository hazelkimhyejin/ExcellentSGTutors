const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('excellentsgtutors');
    const tutors = await db.collection('tutors').find().toArray();
    const tutorEmails = tutors.map(t => t.email);
    const jobId = `JOB${Date.now()}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Optional: Log request body for debugging (remove in production)
    console.log('Request body:', req.body);

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'excellentsgtutors@gmail.com',
      subject: 'New Registration on Excellent SG Tutors',
      text: `A new user has registered interest via the Google Form. Job ID: ${jobId}. ${req.body ? JSON.stringify(req.body) : 'No additional data'}`,
    });

    // Send email to tutors
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: tutorEmails.join(','),
      subject: `New Student Registration - Job ID: ${jobId}`,
      text: `A new student has registered. Job ID: ${jobId}. Please submit your interest here: https://docs.google.com/forms/d/e/1FAIpQLSes2hwDdlFDTkyDrn7EcbqBgOqiU2KXqsBqPRoCVaL--lUz8A/viewform`,
    });

    await client.close();
    res.status(200).json({ message: 'Registration processed', jobId });
  } catch (error) {
    console.error('Error processing registration:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};