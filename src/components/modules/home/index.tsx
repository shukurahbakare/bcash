import React from "react";
import HeroSection from "./hero";
import FeaturesSection from "./features";
import AboutSection from "./about";
import TopCountriesSection from "./topcountries";
import TestimoonialSlider from "./slider";

const HomeComponent = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* <AboutSection /> */}
      <TopCountriesSection />
      <TestimoonialSlider />
    </div>
  );
};

export default HomeComponent;
