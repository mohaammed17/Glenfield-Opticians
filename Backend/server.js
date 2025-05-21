const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/appointment', async (req, res) => {
  const formData = req.body;

  const output = `
   <h3 style="color: #333;">New Appointment Request</h3>
   <h3>From:${formData.firstName} ${formData.lastName}</h3>
  <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
    <tr style="background-color: #f2f2f2;">
      <th align="left">Field</th>
      <th align="left">Details</th>
    </tr>
    <tr>
      <td><strong>Name</strong></td>
      <td>${formData.firstName} ${formData.lastName}</td>
    </tr>
    <tr>
      <td><strong>DOB</strong></td>
      <td>${formData.dob} (yyyy-mm-dd)</td>
    </tr>
    <tr>
      <td><strong>Address</strong></td>
      <td>${formData.address1}, ${formData.address2}</td>
    </tr>
    <tr>
      <td><strong>Postcode</strong></td>
      <td>${formData.postcode}</td>
    </tr>
    <tr>
      <td><strong>Phone</strong></td>
      <td>${formData.phone}</td>
    </tr>
    <tr>
      <td><strong>Contact Hours</strong></td>
      <td>${formData.contactHours}</td>
    </tr>
    <tr>
      <td><strong>Appointment Date</strong></td>
      <td>${formData.appointmentDate} (yyyy-mm-dd)</td>
    </tr>
    <tr>
      <td><strong>Appointment Time</strong></td>
      <td>${formData.appointmentTime}</td>
    </tr>
  </table>
`;
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let info = await transporter.sendMail({
      from: `"Appointment Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.DOCTOR_EMAIL,
      subject: "New Appointment Booking",
      html: output,
    });

    console.log("Message sent: %s", info.messageId);

    res.status(200).json({ success: true, message: "Appointment submitted successfully. You will be contacted shortly." });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send appointment email." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
