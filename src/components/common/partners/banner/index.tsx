import React from "react";
import Image from "next/image";
import partner from "@/components/assets/partner.png";
import "./style.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_container">
        <div className="banner_container_content">
          <h1>Become a Partner</h1>
          <p>
            Launch Business with BNB Cash and offer your clients the best money
            transfer opportunities.
          </p>
          <div className="banner_container_content_cta">
            <button>Learn More</button>
            <button>Success Stories</button>
          </div>
        </div>

        <div className="banner_container_image">
          <Image src={partner} alt="Partner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
