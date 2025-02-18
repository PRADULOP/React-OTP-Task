const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email: String,
    otp: String,
    createdAt: { type: Date, expires: 300, default: Date.now }, // Expires in 5 minutes
});

module.exports = mongoose.model("OTP", otpSchema);
