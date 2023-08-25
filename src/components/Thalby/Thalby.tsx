import React from "react";
import styles from "./Thalby.module.scss";
import { Container } from "../Container";
import { CircleGroup } from "../CircleGroup";

const Thalby = () => {
  return (
    <div className={styles.body}>
      <Container>
        <div className={styles.title}>
          Some of the features that <br />
          make Thalby guides unique
        </div>
        <CircleGroup />
      </Container>
    </div>
  );
};

export { Thalby };
