import React, { useState } from "react";
import { Grid, Avatar, Paper, colors, Typography } from "@mui/material";

const countries = [
  {
    region: "Latin America",
    country: [
      { name: "Português (Brasil)", flag: "path/to/portuguese-flag.png" },
    ],
  },
  {
    region: "Europe",
    country: [
      { name: "Français", flag: "path/to/french-flag.png" },
      { name: "Deutsch", flag: "path/to/german-flag.png" },
      { name: "Español", flag: "path/to/spanish-flag.png" },
      { name: "Polski", flag: "path/to/polish-flag.png" },
      { name: "Pусский", flag: "path/to/russian-flag.png" },
      { name: "Português", flag: "path/to/portuguese-flag.png" },
      { name: "Svenska", flag: "path/to/swedish-flag.png" },
      { name: "Dansk", flag: "path/to/danish-flag.png" },
    ],
  },
  {
    region: "North America",
    country: [{ name: "English", flag: "path/to/english-flag.png" }],
  },
  {
    region: "Asia Pacific",
    country: [
      { name: "日本語", flag: "path/to/japanese-flag.png" },
      { name: "한국어", flag: "path/to/korean-flag.png" },
      { name: "中国人", flag: "path/to/chinese-flag.png" },
    ],
  },
];

const CountryDropdown = ({ isScrolled, hovered, direction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries[0].country[0]
  );

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
  };

  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    color: "#fff",
    "&:hover": {
      color: "black",
    },
  };

  const dropdownMenuStyle = {
    position: "absolute",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    marginTop: direction === "down" ? "5px" : undefined,
    marginBottom: direction === "up" ? "5px" : undefined,
    width: "300px",
    top: direction === "up" ? undefined : "100%",
    bottom: direction === "up" ? "100%" : undefined,
    left: direction === "up" ? "0px" : undefined,
    right: direction === "up" ? undefined : "0px",
    // marginTop: "5px",
    // width: "300px",
  };

  const dropdownItemStyle = {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    border: "1px solid gray",
    borderRadius: "5px",
    transition: "transform 0.2s ease",
    backgroundColor: "#fff",
    marginTop: "15px",
  };

  return (
    <div
      style={dropdownStyle}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Typography
        sx={{
          ...buttonStyle,
          color: isScrolled || isOpen || hovered ? "black" : "white",
          "&:hover": {
            color: "black",
          },
        }}
      >
        <Avatar
          src={selectedCountry.flag}
          alt={`${selectedCountry.name} flag`}
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
        {selectedCountry.name}
      </Typography>
      {isOpen && (
        <div style={dropdownMenuStyle}>
          <Grid container spacing={1} padding={1}>
            {countries.map((region) => (
              <Grid item xs={12} key={region.region}>
                <strong>{region.region}</strong>
                <Grid container spacing={1}>
                  {region.country.map((country, index) => (
                    <Grid item xs={6} key={index}>
                      <Paper
                        elevation={1}
                        style={dropdownItemStyle}
                        onClick={() => handleSelect(country)}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "translateY(-5px)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "translateY(0)")
                        }
                      >
                        <Avatar
                          src={country.flag}
                          alt={`${country.name} flag`}
                          style={{
                            width: "20px",
                            height: "20px",
                            border: "1px solid gray",
                            borderRadius: "5px",
                            marginRight: "8px",
                          }}
                        />
                        {country.name}
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
