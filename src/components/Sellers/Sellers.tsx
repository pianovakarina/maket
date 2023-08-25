import React from "react";

import styles from "./Sellers.module.scss";
import { Container } from "../Container";
import { CardList } from "../CardList";

const Sellers = () => {
  return (
    <Container>
      <div className={styles.title}>Our best sellers</div>
      <CardList />
    </Container>
  );
};

export { Sellers };
