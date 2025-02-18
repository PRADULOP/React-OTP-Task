import React from "react";
import { Paper, Typography, Box } from "@mui/material";

const Welcome = () => {
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
                <Typography variant="h5" color="green" gutterBottom>
                    ✅ OTP Verified Successfully!
                </Typography>
                <Typography variant="body1">
                    Welcome! Your email verification is complete.
                </Typography>
            </Paper>
        </Box>
    );
};

export default Welcome;
