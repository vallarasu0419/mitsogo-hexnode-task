import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import book from "../../assets/booklet.png";
import OIDC from "../../assets/idc-logo (1).png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MajorAchievements = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5FAFF",
        fontFamily: "sans-serif",
        padding: "30px",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: "1 1 auto",
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            <Box
              sx={{
                marginBottom: "25px",
                justifySelf: "left",
                marginLeft: {
                  md: "140px",
                },
              }}
            >
              <img
                src={OIDC}
                alt="IDC Logo"
                style={{
                  maxWidth: "200px",
                  maxHeight: "32px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "34px",
                lineHeight: "1.2",
                margin: "0 0 15px",
                color: "#000",
                fontWeight: "600",
                marginLeft: {
                  md: "140px",
                },
                textAlign: {
                  sm: "left",
                  xs: "left",
                },
              }}
            >
              Mitsogo (Hexnode) mentioned as a Major Player in IDC MarketScape:
              Worldwide Unified Endpoint Management Software 2024 Vendor
              Assessment
            </Typography>

            <Typography
              sx={{
                color: "#DD0735",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "24px",
                margin: "20px 0",
                marginLeft: {
                  lg: "140px",
                  md: "140px",
                },
                textAlign: {
                  sm: "left",
                  xs: "left",
                },
                cursor: "pointer",
                position: "relative",
              }}
            >
              Get Report
              <KeyboardArrowRightIcon sx={{ position: "absolute", top: 0 }} />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "370px",
              width: "100%",
              padding: { xs: "30px 0", lg: "70px 60px" },
            }}
          >
            <img
              src={book}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MajorAchievements;
