import React from "react";
import styled from "styled-components";
import { awards } from "../../DummyData/NavData";
import { Grid, Typography } from "@mui/material";

const AwardsContainer = styled.div`
  background-color: #1a1c2b;
  padding: 30px 140px 30px 140px;
  @media (max-width: 900px) {
    padding: 30px 140px 30px 140px;
  }
  @media (max-width: 700px) {
    padding: 20px;
  }
`;

const AwardItem = styled.div`
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

const AwardImage = styled.img`
  max-width: 100%;
  height: 25px;
  margin-right: 10px;
`;

const AwardDescription = styled(Typography)`
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

const HexnodeAwardsOverview = () => {
  return (
    <AwardsContainer>
      <Grid container spacing={2}>
        {awards.map((award, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <AwardItem>
              <AwardImage src={award.organization} alt={award.organization} />
              <br />
              <AwardDescription>{award.description}</AwardDescription>
              {/* <Box
                sx={{ width: "20px", backgroundColor: "red", height: "100px" }}
              /> */}
            </AwardItem>
          </Grid>
        ))}
      </Grid>
    </AwardsContainer>
  );
};

export default HexnodeAwardsOverview;
