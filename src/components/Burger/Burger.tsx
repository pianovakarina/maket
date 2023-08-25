import React from "react";
import styles from "./Burger.module.scss";

const Burger = () => {
  return (
    <div className={styles.navRow}>
      <nav className={styles.burger}>
        <div className={styles.btn}>
          <span className={styles.span} />
        </div>
      </nav>
    </div>
  );
};

export { Burger };
