import React from "react";
import "./style.scss";
import kenya from "../../../assets/kenya.png"
import civ from "../../../assets/civ.png"
import ghana from "../../../assets/ghana.png"
import nigeria from "../../../assets/nigeria.png"
import tanzania from "../../../assets/tanzania.png"

const TopCountriesSection = () => {

    const topCountriesArr =  [
        {
          icon: kenya,
          name: "Cameroon",
        },
        {
          icon: civ,
          name: "Côte d'Ivoire",
        },
        {
          icon: ghana,
          name: "Ghana",
        },
        {
          icon: kenya,
          name: "Kenia",
        },
        {
          icon: tanzania,
          name: "Cameroon",
        },
        {
          icon: civ,
          name: "Côte d'Ivoire",
        },
        {
          icon: ghana,
          name: "Ghana",
        },
        {
          icon: kenya,
          name: "Kenia",
        },
      ]
  return (
    <section className="top_countries">
      <div className="top_countries_container">
        <h2>Top Countries</h2>
        <div className="top_countries_container_content">
            {topCountriesArr.map((feature: any) => (
              <div
                className="top_countries_container_content_card"
                key={feature.name}
              >
                <div className="top_countries_container_content_card_icon">
                  {feature.icon}
                </div>
                <div className="top_countries_container_content_card_title">
                  <p>{feature.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopCountriesSection;
