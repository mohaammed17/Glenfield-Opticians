from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
DOCTOR_EMAIL = os.getenv("DOCTOR_EMAIL")
PORT = int(os.getenv("PORT", "5000"))

app = Flask(__name__)
CORS(app)

@app.route("/api/appointment", methods=["POST"])
def appointment():
    formData = request.get_json()
    if not formData:
        return jsonify({"success": False, "message": "Invalid input"}), 400

    # Build the HTML email similar to your Node.js version
    output = f"""
    <h3 style="color: #333;">New Appointment Request</h3>
    <h3>From: {formData.get('firstName', '')} {formData.get('lastName', '')}</h3>
    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
      <tr style="background-color: #f2f2f2;">
        <th align="left">Field</th>
        <th align="left">Details</th>
      </tr>
      <tr>
        <td><strong>Name</strong></td>
        <td>{formData.get('firstName', '')} {formData.get('lastName', '')}</td>
      </tr>
      <tr>
        <td><strong>DOB</strong></td>
        <td>{formData.get('dob', '')} (yyyy-mm-dd)</td>
      </tr>
      <tr>
        <td><strong>Address</strong></td>
        <td>{formData.get('address1', '')}, {formData.get('address2', '')}</td>
      </tr>
      <tr>
        <td><strong>Postcode</strong></td>
        <td>{formData.get('postcode', '')}</td>
      </tr>
      <tr>
        <td><strong>Phone</strong></td>
        <td>{formData.get('phone', '')}</td>
      </tr>
      <tr>
        <td><strong>Contact Hours</strong></td>
        <td>{formData.get('contactHours', '')}</td>
      </tr>
      <tr>
        <td><strong>Appointment Date</strong></td>
        <td>{formData.get('appointmentDate', '')} (yyyy-mm-dd)</td>
      </tr>
      <tr>
        <td><strong>Appointment Time</strong></td>
        <td>{formData.get('appointmentTime', '')}</td>
      </tr>
    </table>
    """

    # Create a MIME multipart message and attach the HTML content
    message = MIMEMultipart("alternative")
    message["Subject"] = "New Appointment Booking"
    message["From"] = EMAIL_USER
    message["To"] = DOCTOR_EMAIL

    part = MIMEText(output, "html")
    message.attach(part)

    try:
        # Set up the secure connection with Gmail's SMTP server
        context = ssl.create_default_context()
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls(context=context)
            server.login(EMAIL_USER, EMAIL_PASS)
            server.sendmail(EMAIL_USER, DOCTOR_EMAIL, message.as_string())

        return jsonify({"success": True, "message": "Appointment submitted successfully. You will be contacted shortly."}), 200
    except Exception as e:
        print("Error sending email:", e)
        return jsonify({"success": False, "message": "Failed to send appointment email."}), 500

if __name__ == "__main__":
    app.run(port=PORT, debug=True)