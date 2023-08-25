import React from "react";
import styles from "./Blocks.module.scss";
import { Container } from "../Container";
import { Block } from "../Block/Block";

const blocks = [
  {
    img: "Rectangle3.jpg",
    title: "People and Society",
    text: "Our guides to society deliver all the social insight you need, helping you understand how people live, love and play today and why communities are the way they are.",
    btn: "Shop Society Guides",
    id: 1,
  },
  {
    img: "Rectangle (1).jpg",
    title: "Culture and Heritage",
    text: "As well as covering heritage and tradition, our guides to culture introduce you to the designers, artists and chefs creating at the forefront of today's culture.",
    btn: "Shop Culture Guides",
    id: 2,
  },
  {
    img: "Rectangle (2).jpg",
    title: "Power and Politics",
    text: "Our guides to power take you behind the scenes to explore the power dynamics, policies and politics shaping a country's future and its global position.",
    btn: "Coming 2022!",
    id: 3,
  },
];

const Blocks = () => {
  return (
    // <div className={styles.body}>
    <div className={styles.row}>
      {blocks.map((block, index) => {
        return (
          <div className={styles.body}>
            <Container>
              <Block
                key={block.id}
                index={index}
                img={block.img}
                title={block.title}
                text={block.text}
                btn={block.btn}
              />
            </Container>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export { Blocks };
