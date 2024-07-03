import React from "react";
import "./style.scss";
import Image from "next/image";
import uba from "../../../assets/uba.png";
import gtb from "../../../assets/gtbank.png"
import afrimoney from "../../../assets/afrimoney.png"
import mtn from "../../../assets/mtn.png"
import orange from "../../../assets/orangemoney.png";
import qmoney from "../../../assets/qmoney.png";
import tipme from "../../../assets/tipme.png";
import tmoney from "../../../assets/tmoney.png";

const Scroll = () => {
  const partners = [
    { icon: uba, name: "UBA" },
    { icon: gtb, name: "Ria" },
    { icon: afrimoney, name: "Wave Money" },
    { icon: mtn, name: "MoneyGram" },
    { icon: orange, name: "Orange" },
    { icon: qmoney, name: "Q Money" },
    { icon: tipme, name: "tipme" },
    { icon: tmoney, name: "tmoney" },
    { icon: uba, name: "UBA" },
    { icon: gtb, name: "Ria" },
    { icon: afrimoney, name: "Wave Money" },
    { icon: mtn, name: "MoneyGram" },
    { icon: orange, name: "Orange" },
    { icon: qmoney, name: "Q Money" },
    { icon: tipme, name: "tipme" },
    { icon: tmoney, name: "tmoney" },
    { icon: uba, name: "UBA" },
    { icon: gtb, name: "Ria" },
    { icon: afrimoney, name: "Wave Money" },
    { icon: mtn, name: "MoneyGram" },
    { icon: orange, name: "Orange" },
    { icon: qmoney, name: "Q Money" },
    { icon: tipme, name: "tipme" },
    { icon: tmoney, name: "tmoney" },
    { icon: uba, name: "UBA" },
    { icon: gtb, name: "Ria" },
    { icon: afrimoney, name: "Wave Money" },
    { icon: mtn, name: "MoneyGram" },
    { icon: orange, name: "Orange" },
    { icon: qmoney, name: "Q Money" },
    { icon: tipme, name: "tipme" },
    { icon: tmoney, name: "tmoney" },
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
