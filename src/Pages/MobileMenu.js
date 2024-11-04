import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CustomButton from "../Components/CustomButton";
import {
  MobileMenuContainer,
  MobileMenuItem,
  MenuCloseIcon,
  SubmenuCloseIcon,
  MenuItemHeader,
  Submenu,
  SubmenuItem,
  ExpandedItemTypography,
  LogIn,
} from "./MobileMenu.style";

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
        <a
          href="https://www.hexnode.com/mobile-device-management/cloud/signup/?utm_source=hexnode_home&utm_medium=referral&utm_campaign=sticky_button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CustomButton
            lable={"14 DAY FREE TRIAL"}
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "3px",
              minHeight: "48px",
              textAlign: "center",
              margin: "30px 30px 20px",
              textTransform: "uppercase",
            }}
          />
        </a>

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
