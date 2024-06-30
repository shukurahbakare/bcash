"use client";
import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import Image from "next/image";
import ghana from "../../../assets/ghana.png";

const cards = [
  { id: 1, content: 'I frequently use the BnB CashApp, and I must say that I am very satisfied. In no time, the person on the other end receives their money. I highly recommend it, it is very convenient.', name:'M’balou Cissé',image:ghana,country:'guinea'},
  { id: 2, content: 'My experience with the BnB Cash app has been fantastic. Ive been using the app for two years to send money to my brother in Rwanda, and he receives it directly into his mobile wallet. Additionally, I use it to receive money from abroad through Ria, which really saves me a lot of time. ', name:'M’balou Cissé',image:ghana,country:'guinea' },
  { id: 3, content: 'One of the best things that happened to Liberia was BnB overseas money transfers. With their APP you no longer need to go to the bank again to receive money from Moneygram, Ria or WesternUnion.', name:'M’balou Cissé' ,image:ghana,country:'guinea'},
  { id: 4, content: 'One of the best things that happened to Liberia was BnB overseas money transfers. With their APP you no longer need to go to the bank again to receive money from Moneygram, Ria or WesternUnion. ', name:'M’balou Cissé',image:ghana,country:'guinea' },
  { id: 5, content: 'One of the best things that happened to Liberia was BnB overseas money transfers. With their APP you no longer need to go to the bank again to receive money from Moneygram, Ria or WesternUnion', name:'M’balou Cissé' ,image:ghana,country:'guinea'},
  { id: 6, content: 'I frequently use the BnB CashApp, and I must say that I am very satisfied. In no time, the person on the other end receives their money. I highly recommend it, it is very convenient.', name:'M’balou Cissé',image:ghana,country:'guinea' },
  
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
            setVisibleCard(Number(entry.target.getAttribute('data-id')));
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
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setVisibleCard(id);  // Update state to highlight the indicator
    }
  };

  return (
    <div className="sliderContainer">
      <h2>See what others are saying</h2>
      <div className="slider">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="card"
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            data-id={card.id}
          >
            {card.content}
          </div>
        ))}
      </div>
      <div className="indicators">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`indicator ${visibleCard === card.id ? "active" : ''}`}
            onClick={() => handleIndicatorClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
