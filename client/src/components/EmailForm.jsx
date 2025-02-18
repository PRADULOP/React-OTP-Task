import React from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import axios from "axios";

const EmailForm = ({ email, setEmail, setStep }) => {
    const sendOTP = async () => {
        try {
            await axios.post("http://localhost:8000/api/send-otp", { email });
            setStep(2);
        } catch (err) {
            alert("Error sending OTP");
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
                    Enter Your Email
                </Typography>
                <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" color="primary" fullWidth onClick={sendOTP}>
                    Send OTP
                </Button>
            </Paper>
        </Box>
    );
};

export default EmailForm;
