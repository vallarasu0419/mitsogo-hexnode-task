import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const StartJourney = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setError("");
    } else {
      setError("Please enter your work email!");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#101420",
        fontFamily: "sans-serif",
        padding: "30px",
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "36px",
          lineHeight: 1.2,
          fontWeight: "600",
          margin: "0 0 25px",
          color: "#fff",
        }}
      >
        Sign up and start the journey
      </Typography>

      <Box
        sx={{
          display: {
            xs: "block",
            sm: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          justifySelf: "center",
        }}
      >
        <TextField
          placeholder="Your Work Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: {
              md: "240px",
              sm: "240px",
              xs: "300px",
            },
            borderRadius: "5px",
            backgroundColor: "white",
            marginBottom: {
              xs: "10px",
              sm: "0",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DD0735",
            padding: "20px",
            width: {
              md: "240px",
              sm: "240px",
              xs: "300px",
            },
          }}
        >
          <Typography style={{ fontSize: "17px", lineHeight: "21px" }}>
            GET STARTED
          </Typography>
        </Button>
      </Box>

      {error && (
        <Typography sx={{ fontSize: "18px", color: "white", mt: 1 }}>
          {error}
        </Typography>
      )}

      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "400",
          color: "#ccc",
          margin: 0,
          padding: "10px 0 0",
          cursor: "pointer",
        }}
      >
        No credit cards required.&nbsp; &nbsp;
        <span
          style={{
            color: "#DD0735",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Request a demo{" "}
          <KeyboardArrowRightIcon sx={{ color: "#DD0735", fontSize: "20px" }} />
        </span>
      </Typography>
    </Box>
  );
};

export default StartJourney;
