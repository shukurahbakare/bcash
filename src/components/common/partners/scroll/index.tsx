import React from "react";
import "./style.scss";
import Image from "next/image";
import uba from "../../../assets/uba.png";
import ria from "../../../assets/ria.png";
import wave from "../../../assets/wave.png";
import moneygram from "../../../assets/moneygram.png";
import westernunion from "../../../assets/westernunion.png";

const Scroll = () => {
  const partners = [
    { icon: uba, name: "UBA" },
    { icon: ria, name: "Ria" },
    { icon: wave, name: "Wave Money" },
    { icon: moneygram, name: "MoneyGram" },
    { icon: westernunion, name: "Western Union" },
    { icon: uba, name: "UBA" },
    { icon: ria, name: "Ria" },
    { icon: wave, name: "Wave Money" },
    { icon: moneygram, name: "MoneyGram" },
    { icon: westernunion, name: "Western Union" },
    { icon: uba, name: "UBA" },
    { icon: ria, name: "Ria" },
    { icon: wave, name: "Wave Money" },
    { icon: moneygram, name: "MoneyGram" },
    { icon: westernunion, name: "Western Union" },
  ];

  return (
    <div className="scroll">
      <div className="scroll-container">
        <div className="scroll-content">
          {partners.map((partner, index) => (
            <div className="scroll-element" key={index}>
              <Image src={partner.icon} alt={partner.name} />
            </div>
          ))}
          {partners.map((partner, index) => (
            <div className="scroll-element" key={index + partners.length}>
              <Image src={partner.icon} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
