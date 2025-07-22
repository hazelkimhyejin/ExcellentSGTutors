const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/excellentsgtutors', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Tutor Schema
const tutorSchema = new mongoose.Schema({
  email: { type: String, required: true },
});
const Tutor = mongoose.model('Tutor', tutorSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// API Endpoint for Registration
app.post('/api/register', async (req, res) => {
  try {
    const tutors = await Tutor.find();
    const tutorEmails = tutors.map(tutor => tutor.email);
    const jobId = `JOB${Date.now()}`; // Simple Job ID

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'excellentsgtutors@gmail.com',
      subject: 'New Registration on Excellent SG Tutors',
      text: `A new user has registered interest via the Google Form. Job ID: ${jobId}`,
    });

    // Send email to tutors
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: tutorEmails.join(','),
      subject: `New Student Registration - Job ID: ${jobId}`,
      text: `A new student has registered. Job ID: ${jobId}. Please submit your interest here: https://docs.google.com/forms/d/e/1FAIpQLSes2hwDdlFDTkyDrn7EcbqBgOqiU2KXqsBqPRoCVaL--lUz8A/viewform`,
    });

    res.status(200).send('Registration processed');
  } catch (error) {
    console.error('Error processing registration:', error);
    res.status(500).send('Server error');
  }
});

// Seed some tutors (run once manually)
async function seedTutors() {
  await Tutor.deleteMany({});
  await Tutor.insertMany([
    { email: 'tutor1@example.com' },
    { email: 'tutor2@example.com' },
  ]);
  console.log('Tutors seeded');
}
// seedTutors(); // Uncomment to seed tutors

app.listen(5000, () => console.log('Server running on port 5000'));