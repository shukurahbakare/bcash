import React from 'react'

const TopCountriesSection = () => {

    const topCountriesArr =  [
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
            <feature.icon />
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
