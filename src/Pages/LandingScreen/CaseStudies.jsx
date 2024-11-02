import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { caseStudiesDetails } from "../../DummyData/NavData";

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ padding: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {caseStudiesDetails.map((study, index) => (
          <Box
            key={index}
            sx={{
              width: 400,
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Box
                component="img"
                src={study.img1}
                alt="CaseStudy Image 1"
                sx={{
                  width: "100%",
                  height: "auto",
                  transition: "filter 0.3s",
                  filter: hoveredIndex === index ? "blur(4px)" : "none",
                }}
              />
              {hoveredIndex === index && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    gap: "10px",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <MenuBookIcon />
                    <Typography>Read Story</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <PlayCircleOutlineIcon />
                    <Typography>Watch Video</Typography>
                  </Box>
                </Box>
              )}
            </Box>

            <Box
              component="img"
              src={study.img2}
              alt="CaseStudy Image 2"
              sx={{
                width: "auto",
                maxHeight: "50px",
                maxWidth: "140px",
                marginTop: "20px",
              }}
            />

            <Typography
              sx={{
                textDecoration: "none",
                fontSize: "18px",
                lineHeight: 1.2,
                fontWeight: "600",
                color: "#333",
                textAlign: "center",
                marginTop: "10px",
                paddingBottom: "10px",
              }}
            >
              {study.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CaseStudies;
