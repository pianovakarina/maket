import React from "react";
import styles from "./Circle.module.scss";

interface ICircleProps {
  color: string;
  title: string;
}

const Circle: React.FC<ICircleProps> = ({ color, title }) => {
  return (
    <div className={styles.row}>
      <div className={styles.circle} style={{ background: color }}></div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export { Circle };
