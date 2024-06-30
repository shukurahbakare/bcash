import React from 'react';
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
      <h1>
        Top Countries
      </h1>
      <div className="top_countries_container_content">
      <div className="top-countries-container">
      {topCountriesArr.map((feature: any) => (
        <div className="top-countries-container-content-card" key={feature.name}>
          <div className="top-countries-container-content-card-icon">
            {feature.icon }
          </div>
          <div className="top_countries_container_content_card_title">
            <p>{ feature.name}</p>
          </div>
          
        </div>
        
      ))}
    </div>
          
       
    </div>
    </div>
  </section>
  )
}

export default TopCountriesSection
