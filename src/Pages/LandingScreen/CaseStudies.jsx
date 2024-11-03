import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { caseStudiesDetails } from "../../DummyData/NavData";
import {
  CaseStudiesContainer,
  CaseStudyItem,
  ImageContainer,
  HoverOverlay,
  IconLinkContainer,
  ThumbnailImage,
  StudyImage,
  Title,
  DividerBox,
} from "./CaseStudies.style";

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <CaseStudiesContainer>
      {caseStudiesDetails.map((study, index) => (
        <CaseStudyItem key={index}>
          <ImageContainer
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <StudyImage
              src={study.img1}
              alt="CaseStudy Image 1"
              isHovered={hoveredIndex === index}
            />
            {hoveredIndex === index && (
              <HoverOverlay>
                <IconLinkContainer
                  href="https://www.hexnode.com/mobile-device-management/mdm-case-study-donaldson-company/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MenuBookIcon />
                  <Typography>Read Story</Typography>
                </IconLinkContainer>

                <DividerBox />

                <IconLinkContainer>
                  <PlayCircleOutlineIcon />
                  <Typography>Watch Video</Typography>
                </IconLinkContainer>
              </HoverOverlay>
            )}
          </ImageContainer>

          <ThumbnailImage src={study.img2} alt="CaseStudy Image 2" />

          <Title>{study.title}</Title>
        </CaseStudyItem>
      ))}
    </CaseStudiesContainer>
  );
};

export default CaseStudies;
