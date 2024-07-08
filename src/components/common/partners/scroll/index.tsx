"use client";
import React, { useRef } from "react";
import "./style.scss";
import Image from "next/image";
import uba from "../../../assets/uba.png";
import gtb from "../../../assets/gtbank.png";
import afrimoney from "../../../assets/afrimoney.png";
import mtn from "../../../assets/mtn.png";
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
    // Repeat the partners as necessary
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="scroll">
      <button onClick={scrollLeft} className="scroll-button left">{"<"}</button>
      <div className="scroll-container" ref={scrollContainerRef}>
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
      <button onClick={scrollRight} className="scroll-button right">{">"}</button>
    </div>
  );
};

export default Scroll;
