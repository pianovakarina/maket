import React from "react";
import styles from "./IconGroup.module.scss";

const IconGroup = () => {
  return (
    <div className={styles.navIconsRow}>
      <div className={styles.navIcon}>
        <a href="" className={styles.icon}>
          <img src="Vector.png" alt="vector" />
        </a>
      </div>
      <div className={styles.navIcon}>
        <a href="" className={styles.icon}>
          <img src="Frame (1).png" alt="frame" />
        </a>
      </div>
      <div className={styles.navIcon}>
        <a href="" className={styles.icon}>
          <img src="Frame.png" alt="frame2" />
        </a>
      </div>
    </div>
  );
};

export { IconGroup };
