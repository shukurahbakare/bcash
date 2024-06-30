import React from "react";
import Exchange from "./exchange";
import QR from "./qr";
import "./style.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero_container">
        <h1 className="hero_container_header">Sending Made Easy</h1>
        <section className="hero_container_modules">
          <QR />
          <Exchange />
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
