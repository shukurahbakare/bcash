import React from "react";
import HeroSection from "./hero";
import FeaturesSection from "./features";
import AboutSection from "./about";
import TopCountriesSection from "./topcountries";
import TestimoonialSlider from "./slider";
import PartnersSection from "@/components/common/partners";

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
