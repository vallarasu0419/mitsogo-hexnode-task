import styled from "styled-components";
import { Typography } from "@mui/material";

export const MobileMenuContainer = styled.div`
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

export const MobileMenuItem = styled.div`
  padding: 10px 0;
  cursor: pointer;
`;

export const MenuCloseIcon = styled.div`
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
`;

export const SubmenuCloseIcon = styled.div`
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const MenuItemHeader = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: space-between;
`;

export const Submenu = styled.div`
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

export const ExpandedItemTypography = styled(Typography)`
  font-size: larger;
  line-height: 24px;
  font-weight: 600;
  margin: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 30px;
`;

export const SubmenuItem = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-bottom: 1px solid #f3f3f3;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  transition: all 0.2s linear;
`;

export const LogIn = styled.div`
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
