import React from "react";
import "./style.scss";

const TopCountriesSection = () => {
  const topCountriesArr = [
    {
      icon: "IconEasy",
      name: "Cameroon",
    },
    {
      icon: "IconSupport",
      name: "Côte d'Ivoire",
    },
    {
      icon: "IconRocket",
      name: "Ghana",
    },
    {
      icon: "IconShield",
      name: "Kenia",
    },
    {
      icon: "IconEasy",
      name: "Cameroon",
    },
    {
      icon: "IconSupport",
      name: "Côte d'Ivoire",
    },
    {
      icon: "IconRocket",
      name: "Ghana",
    },
    {
      icon: "IconShield",
      name: "Kenia",
    },
  ];
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
