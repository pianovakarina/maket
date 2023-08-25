import React from "react";
import styles from "./App.module.scss";
import { Header } from "../Header";
import { Humanity } from "../Humanity";
import { Footer } from "../Footer";
import { Guides } from "../Guides";
import { Sellers } from "../Sellers";
import { Blocks } from "../Blocks";
import { Thalby } from "../Thalby";
import { Discover } from "../Discover";
import { Keep } from "../Keep";

function App() {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.navContainer}> */}
      <div className={styles.content}>
        <Header />
        <Humanity />
        <Guides />
        <Sellers />
        <Blocks />
        <Thalby />
        <Discover />
        <Keep />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
