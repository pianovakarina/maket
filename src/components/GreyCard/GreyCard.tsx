import Reacr from "react";
import styles from "./GreyCard.module.scss";
import { Container } from "../Container";

interface IGreyCardProps {
  img: string;
  quote: string;
  name: string;
  profession: string;
  btn: string;
}

const GreyCard: React.FC<IGreyCardProps> = ({
  img,
  quote,
  name,
  profession,
  btn,
}) => {
  return (
    <div className={styles.greyCard}>
      <img className={styles.img} src={img} />
      <div className={styles.textBlock}>
        <div className={styles.quote}>"{quote}"</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.profession}>{profession}</div>
      </div>
      <a href="" className={styles.link}>
        {btn}
      </a>
    </div>
  );
};

export { GreyCard };
