import React from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import axios from "axios";

const OTPForm = ({ email, otp, setOtp, setStep }) => {
    const verifyOTP = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/verify-otp", { email, otp });
            if (response.status === 200) setStep(3);
        } catch (err) {
            alert("Invalid OTP");
        }
    };

    return (
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100vh",
                backgroundColor: "#f4f4f4"
            }}
        >
            <Paper elevation={4} sx={{ padding: 4, textAlign: "center", maxWidth: 400, width: "100%", borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Enter OTP
                </Typography>
                <TextField
                    fullWidth
                    label="One-Time Password"
                    variant="outlined"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" color="primary" fullWidth onClick={verifyOTP}>
                    Verify OTP
                </Button>
            </Paper>
        </Box>
    );
};

export default OTPForm;
