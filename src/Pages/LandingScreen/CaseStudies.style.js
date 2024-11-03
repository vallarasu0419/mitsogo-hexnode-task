import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const CaseStudiesContainer = styled(Box)`
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CaseStudyItem = styled(Box)`
  width: 400px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 291px;
  height: 100%;
  max-height: 261px;
  border-radius: 10px;
  overflow: hidden;
`;

export const StudyImage = styled.img`
  width: 100%;
  height: auto;
  transition: filter 0.3s;
  filter: ${({ isHovered }) => (isHovered ? "blur(4px)" : "none")};
  object-fit: cover;
  border-radius: 10px;
`;

export const HoverOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  gap: 30px;
  z-index: 1;
`;

export const IconLinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  text-decoration: underline;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateX(-5px);
  }
`;

export const ThumbnailImage = styled.img`
  width: auto;
  max-height: 50px;
  max-width: 140px;
  margin-top: 20px;
`;

export const Title = styled(Typography)`
  text-decoration: none;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const DividerBox = styled(Box)`
  width: 40%;
  height: 1px;
  background-color: white;
  margin: 10px 0;
`;
