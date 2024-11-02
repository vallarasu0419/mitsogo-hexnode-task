import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { testimonials } from "../../DummyData/NavData";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const { img, title, description } = testimonials[currentTestimonial];

  return (
    <Box
      sx={{
        padding: "30px",
      }}
    >
      <Box
        sx={{
          display: {
            md: "flex",
            sm: "block",
          },
          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            flex: "1 1 auto",
            height: "60vh",
            border: "1px solid #020A19",
            borderRadius: "16px",
          }}
        >
          <img
            src={img}
            alt="testimonial-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </Box>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Box
          sx={{
            border: "1px solid #020A19",
            borderRadius: "16px",
            padding: "40px 40px 30px 60px",
            backgroundColor: "#ffffff",
            maxWidth: 600,
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "30px",
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

export default Testimonials;
