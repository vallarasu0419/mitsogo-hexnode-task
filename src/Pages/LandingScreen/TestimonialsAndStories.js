import * as React from "react";
import Testimonials from "./Testimonials";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CustomerStories from "./CustomerStories";
import CaseStudies from "./CaseStudies";

const TestimonialsAndStories = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "500px",
              fontSize: "28px",
            }}
          >
            <TabList onChange={handleChange}>
              <Tab label="Testimonials" value="1" sx={{ fontWeight: "700" }} />
              <Tab
                label="Customer Stories"
                value="2"
                sx={{ fontWeight: "700" }}
              />
              <Tab label="Case Studies" value="3" sx={{ fontWeight: "700" }} />
            </TabList>
          </Box>
        </Box>

        <TabPanel value="1">
          <Testimonials />
        </TabPanel>
        <TabPanel value="2">
          <CustomerStories />
        </TabPanel>
        <TabPanel value="3">
          <CaseStudies />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TestimonialsAndStories;
