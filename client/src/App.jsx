import React, { useState } from "react";
import EmailForm from "./components/EmailForm";
import OTPForm from "./components/OTPForm";
import Welcome from "./components/Welcome";
import { Box } from "@mui/material";


const App = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    return (
      <div>
      {step === 1 && <EmailForm email={email} setEmail={setEmail} setStep={setStep} />}
      {step === 2 && <OTPForm email={email} otp={otp} setOtp={setOtp} setStep={setStep} />}
      {step === 3 && <Welcome />}
  </div>
    );
};

export default App;
