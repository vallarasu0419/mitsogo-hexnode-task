import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../Assets/img1.jpg";
import CustomButton from "../../Components/CustomButton";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#101420",
        fontFamily: "sans-serif",
        paddingTop: "50px",
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
            <Typography
              sx={{
                fontSize: "42px",
                lineHeight: 1.2,
                margin: "0 0 15px",
                color: "#fff",
                fontWeight: "900",
                marginLeft: {
                  md: "140px",
                },
              }}
            >
              The Standard for Unified Endpoint Management
            </Typography>

            <Typography
              sx={{
                marginBottom: "20px",
                color: "#fff",
                fontWeight: "semibold",
                fontSize: "18px",
                lineHeight: "24px",
                margin: "0 0 30px",
                marginLeft: {
                  lg: "140px",
                },
              }}
            >
              Manage devices of varying form factors and operating systems with
              one solution
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "flex",
                },
                justifyContent: "center",
                alignItems: "center",
                justifyItems: "center",
                gap: "20px",
              }}
            >
              <a
                href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CustomButton
                  lable={"TRY FOR FREE"}
                  style={{ padding: "20px" }}
                />
              </a>

              <a
                href="https://www.hexnode.com/mobile-device-management/request-demo/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CustomButton
                  lable={"REQUEST DEMO"}
                  style={{ padding: "20px" }}
                  outlined
                />
              </a>
            </Box>
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
              //   padding: "30px",
              maxWidth: 600,
              flex: "1 1 auto",
              height: "100%",
              minHeight: 540,
            }}
          >
            <img
              src={img1}
              alt="img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
