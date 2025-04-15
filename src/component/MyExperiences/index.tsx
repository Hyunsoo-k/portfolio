import { JSX } from "react";

import styles from "./index.module.scss";

const MyExperiences = (): JSX.Element => {
  return (
    <div className={styles["component-container"]}>
      <div className={styles["main"]}>
        <div className={styles["header"]}>
          <div className={styles["title"]}>
            <h1>My Experiences</h1>
            <small>예술을 전공했던 시기부터 프로그래머로써 활동하고 있는 현재까지의 타임라인 입니다</small>
          </div>
        </div>
        <div className={styles["step-box"]}>
          <div className={styles["step-item-wrapper"]}>
            <div className={styles["step-item"]}>
              <div className={styles["explan"]}>
                <div className={styles["dot--border-top"]}></div>
                <h2>뮤지션 필드 활동</h2>
                <small>실용음악 기악전공으로 레슨, 오프라인 스테이지 등 여러 활동을 하였고, 현재 문화 생활과 관련한 웹 애플리케이션 개발에 관심이 많습니다.</small>
                <div className={styles["dot--border-bottom"]}></div>
              </div>
              <div className={styles["year"]}>
                2015
                <div className={styles["year__triangle"]}></div>
              </div>
            </div>
          </div>
          <div className={styles["step-item-wrapper"]}>
            <div className={styles["step-item"]}>
              <div className={styles["explan"]}>
                <div className={styles["dot--border-top"]}></div>
                <h2>프로그래밍 시작</h2>
                <small>프로그래밍의 매력에 빠져 Python으로 프로그래밍 학습을 시작하였으며, 이후 더 나은 클라이언트 개발을 위해 Java script를 학습하였습니다.</small>
                <div className={styles["dot--border-bottom"]}></div>
              </div>
              <div className={styles["year"]}>
                2022
                <div className={styles["year__triangle"]}></div>
              </div>
            </div>
          </div>
          <div className={styles["step-item-wrapper"]}>
            <div className={styles["step-item"]}>
              <div className={styles["explan"]}>
                <div className={styles["dot--border-top"]}></div>
                <h2>부트캠프 수료</h2>
                <small>더 폭넓은 지식과 경험을 위해 코드잇에서 진행하는 스프린트 과정을 수료하였으며, 그 과정에서 협업의 중요성을 알게 되었습니다.</small>
                <div className={styles["dot--border-bottom"]}></div>
              </div>
              <div className={styles["year"]}>
                2024
                <div className={styles["year__triangle"]}></div>
              </div>
            </div>
          </div>
          <div className={styles["time-line"]}></div>
        </div>
      </div>
      <img className={styles["polkaDots"]} src={"/polkaDots.svg"} />
    </div>
  );
};

export default MyExperiences;