import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { IconGroup } from "../IconGroup";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";

const Header = () => {
  const [nav, setNav] = useState(false);

  // const navClass = nav ? "styles.active" : "styles.navList";

  return (
    <Container>
      <nav className={styles.navRow}>
        <ul className={clsx(styles.navList, nav && styles.active)}>
          <li className={styles.navLi}>
            <a className={styles.list} href="#!">
              Shop
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.list} href="#!">
              Collections
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.list} href="#!">
              Try a Free Guide
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={styles.list} href="#!">
              Stories
            </a>
          </li>
        </ul>
        <div className={styles.burger} onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div className={styles.logoImg}>
          <Logo />
          <IconGroup />
        </div>
      </nav>
    </Container>
  );
};

export { Header };
