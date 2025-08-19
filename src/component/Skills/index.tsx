import { JSX } from "react";

import styles from "./index.module.scss";
import { technologyStackBadgeMap } from "@/projectData/technologyStackBadge";

const Skills = (): JSX.Element => {
  return (
    <div id="Skills" className={styles["component-container"]}>
      <div className={styles["main"]}>
        <div className={styles["header"]}>
          <div className={styles["title"]}>
            <h1>Skills</h1>
            <small>프로그래밍에 사용하는 기술 스택들을 모아놓은 곳입니다</small>
          </div>
        </div>
        <div className={styles["skill-box"]}>
          <div className={styles["skill"]}>
            <div className={styles["title"]}>
              <img src="/skillImage/languageImage.svg" />
              Language
            </div>
            <div className={styles["skill-icon-box"]}>
            <img src={technologyStackBadgeMap["javaScript"]} />
            <img src={technologyStackBadgeMap["typeScript"]} />
            </div>
          </div>
          <div className={styles["skill"]}>
            <div className={styles["title"]}>
              <img src="/skillImage/frontEndImage.svg" />
              Frontend
            </div>
            <div className={styles["skill-icon-box"]}>
              <img src={technologyStackBadgeMap["html5"]} />
              <img src={technologyStackBadgeMap["css3"]} />
              <img src={technologyStackBadgeMap["react"]} />
              <img src={technologyStackBadgeMap["nextJs"]} />
              <img src={technologyStackBadgeMap["tanstackQuery"]} />
              <img src={technologyStackBadgeMap["reactHookForm"]} />
              <img src={technologyStackBadgeMap["tiptap"]} />
              <img src={technologyStackBadgeMap["sass"]} />
              <img src={technologyStackBadgeMap["tailwindCss"]} />
            </div>
          </div>
          <div className={styles["skill"]}>
            <div className={styles["title"]}>
              <img src="/skillImage/backEndImage.svg" />
              Backend
            </div>
            <div className={styles["skill-icon-box"]}>
              <img src={technologyStackBadgeMap["nodeJs"]} />
              <img src={technologyStackBadgeMap["express"]} />
              <img src={technologyStackBadgeMap["mongoDb"]} />
              <img src={technologyStackBadgeMap["mongoose"]} />
              <img src={technologyStackBadgeMap["mySql"]} />
              <img src={technologyStackBadgeMap["fireBase"]} />
              <img src={technologyStackBadgeMap["supabase"]} />
            </div>
          </div>
        </div>
      </div>
      <img className={styles["polkaDots"]} src={"/polkaDots.svg"} />
    </div>
  );
};

export default Skills;