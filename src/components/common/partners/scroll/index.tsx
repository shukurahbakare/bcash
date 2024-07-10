"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const cards = [
    { icon: uba, name: "UBA", id:1 },
    { icon: gtb, name: "Ria",id:2 },
    { icon: afrimoney, name: "Wave Money",id:3 },
    { icon: mtn, name: "MoneyGram",id:4 },
    { icon: orange, name: "Orange",id:5 },
    { icon: qmoney, name: "Q Money",id:6 },
    { icon: tipme, name: "tipme",id:7 },
    { icon: tmoney, name: "tmoney",id:8 },
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

  const [visibleCard, setVisibleCard] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCard(Number(entry.target.getAttribute("data-id")));
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observerRef.current?.observe(card);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleIndicatorClick = (id: number) => {
    const cardIndex = cards.findIndex((card) => card.id === id);
    const card = cardRefs.current[cardIndex];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setVisibleCard(id); 
    }
  };

  return (
    <div className="sliderContainer">
      <h2>See what others are saying</h2>
      <div className="slider">
        {cards.map((card, index) => (
          <div key={card.id}>
            <div
              key={card.id}
              className="car"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-id={card.id}
            >
              {/* <p>{card.content}</p> */}
              <div className="card_details">
                <Image src={card.icon} alt={card.name} />
                {/* <div className="">
                  <p>{card.name}</p>
                  <div className="card_details_country">
                    <Image src={card.country_flag} alt={""} />{" "}
                    <p>{card.country}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="indicators">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`indicator ${visibleCard === card.id ? "active" : ""}`}
            onClick={() => handleIndicatorClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Scroll;
