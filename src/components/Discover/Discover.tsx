import React from "react";
import styles from "./Discover.module.scss";
import { Container } from "../Container";
import { GreyCards } from "../GreyCards";

const Discover = () => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <Container>
          <div className={styles.title}>
            Each Thalby guide includes interviews with a range of fascinating
            voices, such as
          </div>
          <GreyCards />
        </Container>
      </div>

      <div className={styles.block}></div>
    </div>
  );
};

export { Discover };
