import React from "react";
import { awards } from "../../DummyData/NavData";
import { Grid } from "@mui/material";
import {
  AwardDescription,
  AwardImage,
  AwardItem,
  AwardsContainer,
  DividerBox,
  AwardItemContainer,
} from "./HexnodeAwardsOverview.style";

const HexnodeAwardsOverview = () => {
  return (
    <AwardsContainer>
      <Grid container spacing={2}>
        {awards.map((award, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <AwardItem>
              <AwardItemContainer>
                <div>
                  <AwardImage
                    src={award.organization}
                    alt={award.organization}
                  />
                  <br />

                  <AwardDescription>{award.description}</AwardDescription>
                </div>

                {index !== 2 && (
                  <div style={{ position: "relative" }}>
                    <DividerBox />
                  </div>
                )}
              </AwardItemContainer>
            </AwardItem>
          </Grid>
        ))}
      </Grid>
    </AwardsContainer>
  );
};

export default HexnodeAwardsOverview;
