import React from "react";
import styles from "./Card.module.scss";

interface ICardProps {
  img: string;
  title: string;
  price: string;
  btn: string;
}

const Card: React.FC<ICardProps> = ({ img, title, price, btn }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} />
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price}</div>

      <a href="" className={styles.link}>
        {btn}
      </a>
    </div>
  );
};

export { Card };
