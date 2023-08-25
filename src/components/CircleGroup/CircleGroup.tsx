import React from "react";
import styles from "./CircleGroup.module.scss";
import { Circle } from "../Circle/Circle";

const circles = [
  {
    color: "#21F7EC",
    title: "Written by locals",
    id: 1,
  },
  {
    color: "#33D3BC",
    title: "Packed with insight",
    id: 2,
  },
  {
    color: "#18A5C6",
    title: "Interviews with diverse voices",
    id: 3,
  },
  {
    color: "#D38F62",
    title: "Key facts and etiquette tips",
    id: 4,
  },
  {
    color: "#F94C43",
    title: "A concise 1-hour read",
    id: 5,
  },
  {
    color: "#D399FF",
    title: "Instant digital access",
    id: 6,
  },
];

const CircleGroup = () => {
  return (
    <div className={styles.row}>
      {circles.map((circle) => {
        return (
          <Circle color={circle.color} title={circle.title} key={circle.id} />
        );
      })}
    </div>
  );
};

export { CircleGroup };
