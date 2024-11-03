import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "../DummyData/NavData";
import MobileMenu from "./MobileMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomDropdown from "../Components/CustomDropdown";
import CustomButton from "../Components/CustomButton";
import CountryDropdown from "../Components/CountryDropdown";

const TopNavigationBar = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const DemoData = ["Request a Demo", "Watch a Demo"];

  const [showDemo, setShowDemo] = useState(false);

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
            <CustomDropdown menuItems={menuItems} />
          </MenuContainer>
        </div>

        <NavbarRight>
          <NavBarRightContent>
            <span>✨ What's new</span>
            <div
              onMouseEnter={() => setShowDemo(true)}
              onMouseLeave={() => setShowDemo(false)}
              style={{ position: "relative", display: "inline-block" }}
            >
              <div style={{ cursor: "pointer" }}>
                Demo
                {showDemo ? (
                  <KeyboardArrowUpIcon sx={{ position: "absolute" }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ position: "absolute" }} />
                )}
              </div>
              {showDemo && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#fff",
                    padding: "15px",
                    zIndex: 1,
                    cursor: "pointer",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                  }}
                >
                  {DemoData.map((title, index) => (
                    <div
                      key={index}
                      style={{ marginBottom: "8px", width: "150px" }}
                    >
                      <strong style={{ width: "100px" }}>{title}</strong>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>Contact Sales</div>
            <div>+1-833-439-6633</div>
            <CountryDropdown isScrolled={isScrolled} hovered={hovered} />
          </NavBarRightContent>
          <CustomButton lable={"14 DAY FREE TRIAL"} />
        </NavbarRight>
      </Navbar>

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
              <MenuIcon
                sx={{
                  fontSize: "25px",
                  paddingRight: { md: "0px", xs: "40px", sm: "0px" },
                }}
              />
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

const NavbarRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
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

const NavBarRightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1400px) {
    display: none;
  }
`;
