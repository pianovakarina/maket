import React from "react";
import styles from "./FooterIcon.module.scss";

const FooterIcon = () => {
  return (
    <div className={styles.footIconsRow}>
      <div className={styles.footIcon}>
        <a href="" className={styles.icon}>
          <img src="Vector.svg" alt="vector" />
        </a>
      </div>
      <div className={styles.footIcon}>
        <a href="" className={styles.icon}>
          <img src="Vector (1).svg" alt="frame" />
        </a>
      </div>
      <div className={styles.footIcon}>
        <a href="" className={styles.icon}>
          <img src="Vector (2).svg" alt="frame2" />
        </a>
      </div>
    </div>
  );
};

export { FooterIcon };
