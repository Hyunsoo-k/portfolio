import { JSX } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaBold } from "react-icons/fa6";

import { useGetViewport } from "@/hook/useGetViewport";

import styles from "./index.module.scss";

const Footer = (): JSX.Element => {
  const viewport = useGetViewport();

  return (
    <div className={styles["component-container"]}>
      <div className={styles["main"]}>
        <div className={styles["content"]}>
          <h1>Thank you!</h1>
          <p>Developer Hyunsoo-kim</p>
          <div className={styles["icon-box"]}>
            <a
              href="https://github.com/Hyunsoo-k"
              target="_blank"
            >
              <FaGithub
                size={viewport === "mobile" ? 25 : 40}
                color="#FFFFFF"
              />
            </a>
            <a
              href="https://dog-foot.tistory.com/"
              target="_blank"
            >
              <FaBold
                size={viewport === "mobile" ? 25 : 40}
                color="#B02148"
              />
            </a>
          </div>
        </div>
      </div>
      <img className={styles["polkaDots"]} src={"/polkaDots.svg"} />
    </div>
  );
};

export default Footer;