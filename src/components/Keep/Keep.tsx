import React from "react";
import styles from "./Keep.module.scss";
import { Container } from "../Container";
import { Form } from "../Form";

const Keep = () => {
  return (
    <div className={styles.wrapperKeep}>
      <Container>
        <div className={styles.row}>
          <div className={styles.title}>Keep in touch</div>
          <div className={styles.content}>
            Get our travel advice, global views and travel freebies in your
            inbox
          </div>
          <Form />
        </div>
      </Container>
    </div>
  );
};

export { Keep };
