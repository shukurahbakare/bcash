"use client";
import React, { useRef, useState, useEffect } from 'react';
import './style.scss';

const cards = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
  { id: 4, content: 'Card 4' },
  { id: 5, content: 'Card 3' },
  { id: 6, content: 'Card 4' },
  { id: 7, content: 'Card 3' },
  { id: 8, content: 'Card 4' },
  { id: 9, content: 'Card 3' },
  { id: 10, content: 'Card 4' },
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
