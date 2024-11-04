import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Box, Grid, Typography } from "@mui/material";
import { cardsData } from "../../DummyData/NavData";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CrossPlatformDashboard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        padding: {
          md: "30px 140px 30px 140px",
          sm: "20px",
          xs: "20px",
        },
      }}
    >
      <Typography
        style={{
          fontSize: "36px",
          lineHeight: 1.2,
          fontWeight: 600,
          color: "black",
          margin: "0 0 15px",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        Excel in desktop, mobile and IoT management
      </Typography>

      <Grid container>
        {cardsData.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              marginTop: {
                md: index >= 3 ? "-20px" : "0px",
                xs: "-20px",
              },
            }}
          >
            <Card>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <HoverBox
                  hovered={hoveredIndex === index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={card.image} alt={card.title} />
                  <Title>{card.title}</Title>
                  <Box sx={{ position: "relative" }}>
                    <Explore>Explore</Explore>
                    <KeyboardArrowRightIcon
                      sx={{
                        position: "relative",
                        left: "-10px",
                        top: "5px",
                        transition: "transform 0.2s ease",
                        transform:
                          hoveredIndex === index
                            ? "translateX(10px)"
                            : "translateX(0)",
                      }}
                    />
                  </Box>
                </HoverBox>
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CrossPlatformDashboard;

const hoverEffect = css`
  transition: transform 0.2s ease;
  transform: translateY(-5px);
`;

const Card = styled.div`
  height: 250px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 120px;
    margin-bottom: 10px;
    object-fit: contain;
  }
`;

const HoverBox = styled(Box)`
  width: 90%;
  padding: 20px;
  text-align: center;
  ${({ hovered }) => hovered && hoverEffect};
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Explore = styled.div`
  font-size: 16px;
  line-height: 1;
  font-weight: normal;
  color: #707070;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-right: 20px;
  margin: 0;
`;
