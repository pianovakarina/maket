import React from "react";
import styles from "./Guides.module.scss";
import { Container } from "../Container";

const Guides = () => {
  return (
    <Container>
      <div className={styles.row}>
        <div className={styles.title}>
          Our guides explain countries and cultures.
        </div>
        <div className={styles.mainText}>
          Are you curious about the world around you? Our guides are for smart
          <br />
          global citizens, world travelers and engaged residents who want to
          gain <br /> a deeper understanding of the cultures and societies they
          care about.
        </div>
        <div className={styles.txt}>
          Available as ebooks here and on Amazon.
        </div>
      </div>
    </Container>
  );
};

export { Guides };
