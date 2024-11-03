import React, { useState } from "react";
import { Box, Grid, Divider, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CustomDropdown = ({ menuItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const getBoxStyles = (name) => {
    let leftOffset;

    switch (name) {
      case "Solutions":
        leftOffset = "-154px";
        break;
      case "Partners":
        leftOffset = "-480px";
        break;
      case "Contact":
        leftOffset = "-700px";
        break;
      default:
        leftOffset = "0";
    }

    return {
      position: "absolute",
      top: "100%",
      left: leftOffset,
      backgroundColor: "#fff",
      padding: "20px",
      zIndex: 1,
      width: "96.7vw",
    };
  };

  const itemStyles = {
    width: "90%",
    padding: "10px",
    borderRight: "2px solid gray",
    "&:hover": {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transform: "translateY(-5px)",
      transition: "transform 0.2s ease",
      borderLeft: "2px solid gray",
      borderRight: "0px solid gray",
    },
  };

  return (
    <div style={{ display: "flex", gap: "10px", width: "100%" }}>
      {menuItems.map((menuItem, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredItem(menuItem.submenu ? index : null)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            position: "relative",
            cursor: "pointer",
            width: "100%",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              //   padding: "10px",
              cursor: "pointer",
              position: "relative",
              fontSize: "15px",
              lineHeight: "24px",
              width: "100px",
            }}
          >
            <span style={{ position: "relative" }}>
              {menuItem.name}
              {menuItem.submenu &&
                (hoveredItem === index ? (
                  <KeyboardArrowUpIcon sx={{ position: "absolute" }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ position: "absolute" }} />
                ))}
            </span>
          </div>
          {hoveredItem === index && menuItem.submenu && (
            <Box sx={getBoxStyles(menuItem.name)}>
              <Grid container spacing={2}>
                {menuItem.submenu.map((item, subIndex) => (
                  <Grid item xs={4} key={subIndex}>
                    <Box sx={itemStyles}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#020a19",
                          marginBottom: "8px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ margin: "8px 0" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "gray",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomDropdown;
