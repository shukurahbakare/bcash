import React from "react";
import HeroSection from "./hero";
import FeaturesSection from "./features";
import AboutSection from "./about";
import TopCountriesSection from "./topcountries";

const HomeComponent = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* <AboutSection /> */}
      <TopCountriesSection />
    </div>
  );
};

export default HomeComponent;
