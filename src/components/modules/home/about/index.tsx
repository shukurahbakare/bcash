import React from "react";
import "./style.scss";
import Image from "next/image";
import mock1 from "@/components/assets/mock1.png";
import mock2 from "@/components/assets/mock2.png";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about_container">
        <section className="about_container_modules">
          <div>
            <h1>About Us</h1>
            <p>
              BnB Transfer Corp is a division of Cauridor, a multi-national
              fintech company headquartered in Canada. BnB provides
              international money transfer and payment services to individuals
              in multiple countries around the world with a focus on sending and
              receiving money transfers to, from and within Africa.
            </p>
            
          </div>

          <div>
            <Image src={mock1} alt="mobile phone" />
            <Image src={mock2} alt="mobile phone" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
