import styled from "styled-components";
import { Typography, Box } from "@mui/material";

export const AwardsContainer = styled.div`
  background-color: #1a1c2b;
  padding: 30px 140px 30px 140px;
  @media (max-width: 1200px) {
    padding: 30px 40px 30px 40px;
  }
  @media (max-width: 900px) {
    padding: 30px 140px 30px 140px;
    text-align: center;
  }
  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const AwardItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 900px) {
    justify-items: center;
  }
`;

export const AwardImage = styled.img`
  max-width: 100%;
  height: 25px;
  margin-right: 10px;
`;

export const AwardDescription = styled(Typography)`
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0;
  color: gray;
  opacity: 0.6;
  word-break: break-word;
  margin: 0;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const AwardItemContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const DividerBox = styled(Box)`
  width: 2px;
  background-color: gray;
  height: 100px;

  @media (max-width: 900px) {
    width: 100px;
    height: 2px;
    justify-self: center;
    position: absolute;
    left: 40%;
    top: 20px;
  }
`;
