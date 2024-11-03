import React, { useState } from "react";
import { Box, Grid, ListItem, ListItemText, Divider } from "@mui/material";

const Demo = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    {
      name: "Solutions",
      submenu: [
        {
          title: "Hexnode UEM",
          description:
            "Centralize management of mobiles, PCs, and wearables in the enterprise",
        },
        {
          title: "Hexnode Kiosk Lockdown",
          description:
            "Lockdown devices to apps and websites for high yield and security",
        },
        {
          title: "Hexnode Secure Browser",
          description:
            "Enforce protection from malicious websites and online threats",
        },
        {
          title: "Hexnode Digital Signage",
          description: "Central management for digital signages",
        },
        {
          title: "Hexnode Genie",
          description: "AI-based device management with Hexnode Genie",
        },
      ],
    },
    { name: "Pricing" },
    { name: "Customers" },
    {
      name: "Partners",
      submenu: [
        {
          title: "Hexnode Partner Programs",
          description: "Explore every partnership program offered by Hexnode",
        },
        {
          title: "Reseller Partnership",
          description: "Deliver Hexnode's solution to your clients",
        },
        {
          title: "MSP Partnership",
          description:
            "Help your clients scale their endpoint management efforts",
        },
        {
          title: "OEM Partnership",
          description: "Integrate Hexnode for managing your devices",
        },
        {
          title: "Distribution Program",
          description: "Become Hexnode's official distributor and grow revenue",
        },
        {
          title: "ISV Partnership",
          description: "Sell Hexnode UEM and explore the UEM market",
        },
        {
          title: "Hexnode Marketplace",
          description: "Checkout Hexnode's partner integrations and tools",
        },
      ],
    },
    { name: "Blog" },
    {
      name: "Contact Us",
      submenu: [
        {
          title: "Sales",
          description: "Get in touch with our sales team",
        },
        {
          title: "Support",
          description: "Contact customer support",
        },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {menuItems.map((menuItem, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredItem(menuItem.submenu ? index : null)}
          onMouseLeave={() => setHoveredItem(null)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div>{menuItem.name}</div>
          {hoveredItem === index && menuItem.submenu && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                zIndex: 1,
                minWidth: "300px",
              }}
              role="presentation"
            >
              <Grid container spacing={2}>
                {menuItem.submenu.map((item, subIndex) => (
                  <Grid item xs={12} key={subIndex}>
                    <ListItem disableGutters>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <ListItemText
                          primary={item.title}
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#020a19",
                            marginBottom: "8px",
                          }}
                        />
                        <ListItemText
                          primary={item.description}
                          sx={{
                            fontSize: "14px",
                            color: "gray",
                          }}
                        />
                      </Box>
                    </ListItem>
                    {subIndex < menuItem.submenu.length - 1 && (
                      <Divider orientation="horizontal" flexItem />
                    )}
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

export default Demo;
