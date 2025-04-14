import { JSX } from "react";

import AboutMe from "@/component/AboutMe";
import Portfolio from "@/component/Portfolio";
import Skills from "@/component/Skills";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

import styles from "./index.module.scss";

const Home = (): JSX.Element => {
  return (
    <div className={styles["component-container"]}>
      <AboutMe />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
