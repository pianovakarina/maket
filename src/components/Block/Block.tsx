import React from "react";
import styles from "./Block.module.scss";
import clsx from "clsx";

interface IBlockProps {
  img: string;
  title: string;
  text: string;
  btn: string;
  index: number;
}
const Block: React.FC<IBlockProps> = ({ img, title, text, btn, index }) => {
  // let rowClass = styles.row;

  // if (index % 2 === 0) {
  //   rowClass = rowClass + " " + styles.second;
  // }
  return (
    // <div className={styles.body}>
    <div className={clsx(styles.row, index % 2 === 0 && styles.second)}>
      <div className={styles.image}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.textBlock}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <a href="" className={styles.link}>
          {btn}
        </a>
      </div>
    </div>
    // </div>
  );
};

export { Block };
