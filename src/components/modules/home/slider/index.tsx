"use client";
import React, { useRef, useState, useEffect } from "react";
import "./style.scss";
import Image from "next/image";
import placeholder from "../../../assets/placeholder.png";
import country_flag from "@/components/assets/ghana.png";

const cards = [
  {
    id: 1,
    content:
      "I frequently use the BnB CashApp, and I must say that I am very satisfied. In no time, the person on the other end receives their money. I highly recommend it, it is very convenient.",
    name: "M’balou Cissé",
    image: placeholder,
    country: "Guinea",
    country_flag: country_flag,
  },
  {
    id: 2,
    content:
      "My experience with the BnB Cash app has been fantastic. Ive been using the app for two years to send money to my brother in Rwanda, and he receives it directly into his mobile wallet. Additionally, I use it to receive money from abroad through Ria, which really saves me a lot of time. ",
    name: "M’balou Cissé",
    image: placeholder,
    country: "Liberia",
    country_flag: country_flag,
  },
  {
    id: 3,
    content:
      "One of the best things that happened to Liberia was BnB overseas money transfers. With their APP you no longer need to go to the bank again to receive money from Moneygram, Ria or WesternUnion.",
    name: "M’balou Cissé",
    image: placeholder,
    country: "guinea",
    country_flag: country_flag,
  },
  {
    id: 4,
    content:
      "One of the best things that happened to Liberia was BnB overseas money transfers. With their APP you no longer need to go to the bank again to receive money from Moneygram, Ria or WesternUnion. ",
    name: "M’balou Cissé",
    image: placeholder,
    country: "guinea",
    country_flag: country_flag,
  },
  {
    id: 5,
    content:
      "One of the best things that happened to Liberia was BnB overseas money transfers. With their APP you no longer need to go to the bank again to receive money from Moneygram, Ria or WesternUnion",
    name: "M’balou Cissé",
    image: placeholder,
    country: "guinea",
    country_flag: country_flag,
  },
  {
    id: 6,
    content:
      "I frequently use the BnB CashApp, and I must say that I am very satisfied. In no time, the person on the other end receives their money. I highly recommend it, it is very convenient.",
    name: "M’balou Cissé",
    image: placeholder,
    country: "guinea",
    country_flag: country_flag,
  },

  // Add more cards if needed
];

const CardSlider: React.FC = () => {
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
              className="card"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-id={card.id}
            >
              <p>{card.content}</p>
              <div className="card_details">
                <Image src={card.image} alt={card.name} />
                <div className="">
                  <p>{card.name}</p>
                  <div className="card_details_country">
                    <Image src={card.country_flag} alt={""} />{" "}
                    <p>{card.country}</p>
                  </div>
                </div>
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

export default CardSlider;
