// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import OtpInput from "./OtpInput";

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    const input = e.target.value;
    // Ensure only numeric input is allowed (filter out non-digit characters)
    const cleanedInput = input.replace(/[^0-9]/g, "");
    setPhoneNumber(cleanedInput);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    // Ensure phone number is exactly 10 digits
    if (phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits long.");
      return;
    }

    // If phone number is valid, show OTP input screen
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log(otp);
  };

  return (
    <Paper elevation={3} sx={{ padding: "20px", marginTop: "30px" }}>
      <Box textAlign="center">
        {!showOtpInput ? (
          <form onSubmit={handlePhoneSubmit}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={handlePhoneNumber}
              margin="normal"
              type="tel"
              placeholder="Enter your phone number"
              required
              inputProps={{ maxLength: 10 }} // Limit the input to 10 characters
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        ) : (
          <Box>
            <Typography variant="h6" mb={2}>
              Enter the OTP sent to {phoneNumber}
            </Typography>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default PhoneOtpLogin;
