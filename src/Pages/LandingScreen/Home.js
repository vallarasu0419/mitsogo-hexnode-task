import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../Assets/img1.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#101420",
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
              //   padding: "30px",
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
              }}
            >
              <Button
                variant="contained"
                sx={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#DD0735",
                  padding: "20px",
                  width: {
                    md: "240px",
                  },
                  maxWidth: "260px",
                }}
              >
                <Typography style={{ fontSize: "17px", lineHeight: "21px" }}>
                  TRY FOR FREE
                </Typography>
              </Button>

              <Button
                variant="outlined"
                sx={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                  padding: "20px",
                  width: {
                    md: "240px",
                  },
                  maxWidth: "260px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "17px",
                    lineHeight: "21px",
                    color: "#fff",
                  }}
                >
                  REQUEST DEMO
                </Typography>
              </Button>
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
