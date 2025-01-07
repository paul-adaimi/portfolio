import React, { useState } from "react";
import styles from "./CardList.module.css";

const CardList = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <div className={styles.cardContainer}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={
            styles.card +
            " " +
            (selectedCard === index ? styles.expanded : styles.collapsed)
          }
          onClick={() => handleCardClick(index)}
        >
          <h3
            className={
              styles.title +
              " " +
              (selectedCard === index ? styles.expanded : styles.collapsed)
            }
          >
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CardList;
