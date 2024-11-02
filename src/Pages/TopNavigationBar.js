import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "../DummyData/NavData";
import MobileMenu from "./MobileMenu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";

const TopNavigationBar = () => {
  const [hovered, setHovered] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const NavbarHeight = 90;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (submenu) => {
    if (submenu && submenu !== hoveredMenu) {
      setHoveredMenu(submenu);
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
      setHoveredMenu(null);
    }
  };

  const handleMenuItemLeave = () => {
    setDrawerOpen(false);
    setHoveredMenu(null);
    setIsScrolled(false);
  };

  const renderDrawerList = () => (
    <Box
      sx={{ width: "auto", padding: "50px" }}
      role="presentation"
      onMouseLeave={handleMenuItemLeave}
    >
      <Grid container spacing={2}>
        {hoveredMenu?.map((item, index) => (
          <Grid item xs={4} key={index}>
            {" "}
            <ListItem button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: "30px",
                }}
              >
                <ListItemText
                  primary={item.title}
                  sx={{
                    fontSize: "18px",
                    lineHeight: "24px",
                    fontWeight: "normal",
                    color: "#020a19",
                    margin: 0,
                  }}
                />
                <ListItemText
                  primary={item.description}
                  sx={{
                    fontSize: "18px",
                    lineHeight: "18px",
                    fontWeight: "normal",
                    color: "gray",
                    margin: 0,
                  }}
                />
              </Box>
            </ListItem>
            <Divider orientation="horizontal" variant="middle" flexItem />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <>
      <Navbar
        isScrolled={isScrolled}
        hovered={hovered}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo>hexnode</Logo>
          <MenuContainer>
            <Menu>
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    if (item.submenu) {
                      handleMenuItemClick(item.submenu);
                      setIsScrolled(true);
                    } else {
                      handleMenuItemLeave();
                    }
                  }}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <>
                      {drawerOpen && hoveredMenu === item.submenu ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </MenuContainer>
        </div>

        <NavbarRight>
          <span>✨ What's new</span>
          <span>Demo</span>
          <span>Contact Sales</span>
          <span>+1-833-439-6633</span>
          <span role="img" aria-label="language">
            🇺🇸 English
          </span>
          <TrialButton>14 DAY FREE TRIAL</TrialButton>
        </NavbarRight>
      </Navbar>

      {/* Drawer with hover effect */}
      <Box>
        <Drawer
          anchor="top"
          open={drawerOpen}
          sx={{
            top: `${NavbarHeight}px`,
            "& .MuiPaper-root": {
              marginTop: `${NavbarHeight}px`,
            },
          }}
        >
          {renderDrawerList()}
        </Drawer>
      </Box>

      {/* MOBILE VIEW */}
      <MobleNavbar isScrolled={isScrolled}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Logo>hexnode</Logo>
          <MobileIcon onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon sx={{ fontSize: "25px" }} />
            )}
          </MobileIcon>
        </div>

        {isMobileMenuOpen && (
          <MobileMenu
            menuItems={menuItems}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        )}
      </MobleNavbar>

      <Outlet />
    </>
  );
};

export default TopNavigationBar;

const Navbar = styled.div`
  position: ${({ isScrolled }) => (isScrolled ? "fixed" : "static")};
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: ${({ isScrolled }) => (isScrolled ? "97%" : "auto")};
  background-color: ${({ isScrolled, hovered }) =>
    isScrolled || hovered ? "white" : "#101420"};
  color: ${({ isScrolled, hovered }) =>
    isScrolled || hovered ? "black" : "white"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const MobleNavbar = styled.div`
  position: ${({ isScrolled }) => (isScrolled ? "fixed" : "static")};
  top: 0;
  left: 0;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  @media (max-width: 1200px) {
    display: flex;
    width: ${({ isScrolled }) => (isScrolled ? "94%" : "auto")};
    background-color: ${({ isScrolled, hovered }) =>
      isScrolled || hovered ? "white" : "#101420"};
    color: ${({ isScrolled, hovered }) =>
      isScrolled || hovered ? "black" : "white"};
    box-shadow: ${({ isScrolled }) =>
      isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"};
    transition: background-color 0.3s, box-shadow 0.3s;
    z-index: 1000;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
`;

const MenuContainer = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: #101010;
    background-color: white;
    border-radius: 5px;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

const TrialButton = styled.button`
  background-color: #d62027;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #c21825;
  }
`;
