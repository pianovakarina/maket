import React from "react";
import styles from "./CardList.module.scss";
import { Container } from "../Container";
import { Card } from "../Card/Card";

export const cards = [
  {
    img: "image 2.jpg",
    title: "Thalby Guide to French Culture and Heritage",
    price: "USD 6.99",
    btn: "Add to cart",
    id: 1,
  },
  {
    img: "image 3.jpg",
    title: "Thalby Guide to French People and Society",
    price: "USD 6.99",
    btn: "Add to cart",
    id: 2,
  },
  {
    img: "image 4.jpg",
    title: "Thalby Guide to German Culture and Heritage",
    price: "USD 6.99",
    btn: "Add to cart",
    id: 3,
  },
];

const CardList = () => {
  return (
    <Container>
      <div className={styles.body}>
        <div className={styles.row}>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                img={card.img}
                title={card.title}
                price={card.price}
                btn={card.btn}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export { CardList };
