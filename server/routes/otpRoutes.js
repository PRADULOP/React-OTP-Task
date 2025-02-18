const express = require("express");
const router = express.Router();
const OTP = require("../models/OTPModel");
const nodemailer = require("nodemailer");

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// **1️⃣ Route to Send OTP**
router.post("/send-otp", async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

    try {
        await OTP.create({ email, otp });

        // Send Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP code is: ${otp}`,
        };
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "OTP sent successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error sending OTP", error: err });
    }
});

// **2️⃣ Route to Verify OTP**
router.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;

    try {
        const record = await OTP.findOne({ email, otp });
        if (record) {
            res.status(200).json({ message: "OTP Verified!" });
        } else {
            res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error verifying OTP", error: err });
    }
});

module.exports = router;
