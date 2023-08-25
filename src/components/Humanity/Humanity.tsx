import React from "react";
import styles from "./Humanity.module.scss";
import { Button } from "../Button";
import { Container } from "../Container";

const Humanity = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.row}>
          <div className={styles.textBlock}>
            <div className={styles.textTitle}>
              Fall deeper in love with <br /> humanity.
            </div>
            <div className={styles.text}>
              Get to know the world through our concise, informative and
              inspiring guides.
            </div>
            <Button>Shop Now</Button>
          </div>
          <div className={styles.imageBlock}>
            <img src="image 1.jpg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Humanity };
