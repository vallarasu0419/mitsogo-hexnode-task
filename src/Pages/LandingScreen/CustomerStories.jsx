import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Customer } from "../../DummyData/NavData";

const CustomerStories = () => {
  const [currentCustomer, setCurrentCustomer] = useState(0);

  const handleNext = () => {
    setCurrentCustomer((prev) => (prev + 1) % Customer.length);
  };

  const handlePrevious = () => {
    setCurrentCustomer(
      (prev) => (prev - 1 + Customer.length) % Customer.length
    );
  };

  const { img, name, interest, position, title, description, points } =
    Customer[currentCustomer];

  return (
    <Box sx={{ padding: "30px" }}>
      <Box
        sx={{
          display: { md: "flex", sm: "block" },
          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: 400,
            flex: "1 1 auto",
            height: "60vh",
            border: "1px solid #020A19",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <img
            src={img}
            alt="testimonial-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              color: "#ffffff",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography variant="body2">{interest}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {position}
            </Typography>
          </Box>
        </Box>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Box
          sx={{
            border: "1px solid #020A19",
            borderRadius: "16px",
            padding: "40px 40px 30px 60px",
            backgroundColor: "#ffffff",
            width: { md: 800, sm: 400 },
            height: {
              md: "50vh",
              xs: "auto",
            },
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              height: "1px",
              backgroundColor: "gray",
              width: "100%",
              margin: "20px 0",
            }}
          />
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "26px",
              fontWeight: "normal",
              color: "#556575",
            }}
          >
            {description}
          </Typography>
          <ul
            style={{ paddingLeft: "20px", marginTop: "10px", color: "#556575" }}
          >
            {points.map((point, index) => (
              <li key={index} style={{ fontSize: "16px", lineHeight: "24px" }}>
                {point}
              </li>
            ))}
          </ul>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "absolute",
              bottom: "16px",
              right: "16px",
            }}
          >
            <Box
              onClick={handlePrevious}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                marginRight: "10px",
                border: "1px solid #020A19",
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <ArrowBackIcon />
            </Box>
            <Box
              onClick={handleNext}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                border: "1px solid #020A19",
                borderRadius: "50%",
                padding: "10px",
                backgroundColor: "black",
              }}
            >
              <ArrowForwardIcon sx={{ color: "white" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerStories;
