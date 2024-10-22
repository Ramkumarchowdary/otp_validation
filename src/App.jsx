// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import PhoneOtpLogin from "./Components/PhoneOtpLogin";
import "./App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "50px" }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Login with Phone
          </Typography>
        </Box>
        <PhoneOtpLogin />
      </Paper>
    </Container>
  );
}

export default App;
