import React from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  children: string;
}

const Button = ({ children }: IButtonProps) => {
  return <button className={styles.btn}>{children}</button>;
};

export { Button };
