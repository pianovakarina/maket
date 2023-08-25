import React from "react";
import styles from "./GreyCards.module.scss";
import { GreyCard } from "../GreyCard/GreyCard";

const greyCards = [
  {
    img: "photo.png",
    quote:
      "I don’t like things to be conventional. If it’s too nice, I bring disorder.",
    name: "Camille Muller,",
    profession: "Landscape Designer, France",
    btn: "Discover",
    id: 1,
  },
  {
    img: "photo2.png",
    quote: "Magic is not magic in the sense that I can just wish for anything.",
    name: "Sonia Kowalewski,",
    profession: "Witch, Germany",
    btn: "Discover",
    id: 2,
  },
  {
    img: "photo3.png",
    quote:
      "I was eight years old when I entered my first competition. I won it.",
    name: "Lilly Stoephasius,",
    profession: "Skateboarder, Germany",
    btn: "Discover",
    id: 3,
  },
];

const GreyCards = () => {
  return (
    <div className={styles.row}>
      {greyCards.map((card) => {
        return (
          <GreyCard
            key={card.id}
            img={card.img}
            quote={card.quote}
            name={card.name}
            profession={card.profession}
            btn={card.btn}
          />
        );
      })}
    </div>
  );
};

export { GreyCards };
