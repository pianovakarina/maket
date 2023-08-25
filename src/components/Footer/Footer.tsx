import React from "react";
import styles from "./Footer.module.scss";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { FooterIcon } from "../FooterIcon";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.row}>
          <div className={styles.logoGroup}>
            <img className={styles.img} src="Frame.svg" alt="logo" />
            <FooterIcon />
          </div>
          <div className={styles.rowContent}>
            <div className={styles.rowAbout}>
              <div className={styles.titleAbout}>ABOUT</div>
              <ul className={styles.ulAbout}>
                <li className={styles.liAbout}>About Us</li>
                <li className={styles.liAbout}>Privacy Policy</li>
                <li className={styles.liAbout}>Terms and Conditions</li>
                <li className={styles.liAbout}>Write for Us</li>
              </ul>
            </div>
            <div className={styles.rowContact}>
              <div className={styles.titleContact}>CONTACT </div>
              <div className={styles.email}>Email hi@thalby.com</div>
              <div className={styles.txtContact}>Help</div>
            </div>
          </div>
        </div>
        <div className={styles.text}>Thalby LLC © 2021</div>;
      </Container>
    </div>
  );
};

export { Footer };
