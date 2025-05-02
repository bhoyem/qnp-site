const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Use environment variables for sensitive data

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint to handle email sending
app.post("/send-email", async (req, res) => {
    const { name, email, phone, address, message } = req.body;

    // Configure the transporter
    let transporter = nodemailer.createTransport({
        service: "gmail", // Use your email provider
        auth: {
            user: process.env.EMAIL_USER, // Use environment variable for email
            pass: process.env.EMAIL_PASS  // Use environment variable for password
        }
    });

    // Email options
    let mailOptions = {
        from: email,
        to: "contact@qualityneighborhood.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n\nMessage:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
