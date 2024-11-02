import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Typography } from "@mui/material";

const MobileMenu = ({ menuItems, setMobileMenuOpen }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpand = (item) => {
    setExpandedItem(item);
  };

  return (
    <>
      <MobileMenuContainer>
        <MenuCloseIcon onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon sx={{ fontSize: "25px" }} />
        </MenuCloseIcon>
        {menuItems.map((item, index) => (
          <MobileMenuItem key={index}>
            <MenuItemHeader onClick={() => handleExpand(item)}>
              {item.name}{" "}
              {item && item.submenu && (
                <KeyboardArrowRightIcon sx={{ marginRight: "20px" }} />
              )}
            </MenuItemHeader>
          </MobileMenuItem>
        ))}
        <TrialButton>14 DAY FREE TRIAL</TrialButton>
        <LogIn>Login</LogIn>
      </MobileMenuContainer>

      {expandedItem && (
        <Submenu expandedItem={expandedItem}>
          <SubmenuCloseIcon>
            <MenuItemHeader>
              <div style={{ display: "flex", alignItems: "center" }}>
                <KeyboardArrowLeftIcon
                  onClick={() => setExpandedItem(null)}
                  sx={{ fontSize: "28px" }}
                />
                <ExpandedItemTypography onClick={() => setExpandedItem(null)}>
                  {expandedItem.name}
                </ExpandedItemTypography>
              </div>
              <CloseIcon
                sx={{ fontSize: "25px" }}
                onClick={() => setMobileMenuOpen(false)}
              />
            </MenuItemHeader>
          </SubmenuCloseIcon>
          {expandedItem?.submenu?.map((subItem, idx) => (
            <SubmenuItem key={idx}>{subItem.title}</SubmenuItem>
          ))}
        </Submenu>
      )}
    </>
  );
};

export default MobileMenu;

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: white;
  color: #101420;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 10;
  transition: transform 0.2s ease;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

const MobileMenuItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
`;

const MenuCloseIcon = styled.div`
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
`;

const SubmenuCloseIcon = styled.div`
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const MenuItemHeader = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: space-between;
`;

const Submenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: white;
  color: #101420;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 10;
  transition: transform 0.5s ease;
  transform: ${({ expandedItem }) =>
    expandedItem ? "translateX(0)" : "translateX(100%)"};
  @media (max-width: 400px) {
    width: 300px;
  }
`;

const ExpandedItemTypography = styled(Typography)`
  font-size: larger;
  line-height: 24px;
  font-weight: 600;
  margin: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 30px;
`;

const SubmenuItem = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid #f3f3f3;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  transition: all 0.2s linear;
`;
const TrialButton = styled.button`
  background-color: #dd0735;
  color: #ffffff;
  padding: 12px 30px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  min-height: 48px;
  text-align: center;
  margin: 30px 30px 20px;
  text-transform: uppercase;

  &:hover {
    background-color: #c21825;
  }
`;

const LogIn = styled.div`
  cursor: pointer;
  display: block;
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
  white-space: nowrap;
  padding: 10px 30px;
  min-height: 48px;
  border-radius: 3px;
  text-align: center;
  margin: 0 30px 10px;
  color: #020a19;
  background-color: #ffffff;
`;
