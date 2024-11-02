import React from "react";
import Home from "./Home";
import HexnodeAwardsOverview from "./HexnodeAwardsOverview";
import CrossPlatformDashboard from "./CrossPlatformDashboard";
import TrustedByPartners from "./TrustedByPartners";
import TestimonialsAndStories from "./TestimonialsAndStories";
import MajorAchievements from "./MajorAchievements";
import StartJourney from "./StartJourney";
import Footer from "./Footer";

const LandingScreen = () => {
  return (
    <>
      <Home />
      <HexnodeAwardsOverview />
      <CrossPlatformDashboard />
      <TrustedByPartners />
      <TestimonialsAndStories />
      <MajorAchievements />
      <StartJourney />
      <Footer />
    </>
  );
};

export default LandingScreen;
