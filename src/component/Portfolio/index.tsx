import { JSX, useState } from "react";

import { ProjectDataType } from "@/type/ProjectDataType";
import { personalProject, teamProject } from "@/projectData/projectData";
import ProjectCard from "@/component/ProjectCard";

import styles from "./index.module.scss";

type StateType = "All" | "Personal" | "Team";

const Portfolio = (): JSX.Element => {
  const [classification, setClassification] = useState<StateType>("All");

  const classificationMap = {
    "All": [...personalProject, ...teamProject],
    "Personal": personalProject,
    "Team": teamProject
  };
  
  const [projectDataArray, setProjectDataArray] = useState<ProjectDataType[]>(classificationMap[classification]);

  const handleClickClassify = (classification: StateType): void => {
    setClassification(classification);
    setProjectDataArray(classificationMap[classification])
  };

  return(
    <div id="Portfolio" className={styles["compoenent-container"]}>
      <div className={styles["main"]}>
        <div className={styles["header"]}>
          <div className={styles["title"]}>
            <h1>Portfolio</h1>
            <small>개인 프로젝트와 팀 프로젝트를 모아놓은 곳입니다</small>
          </div>
          <div className={styles["menu-box"]}>
            <div
              onClick={() => { handleClickClassify("All"); }}
              className={styles[`${classification === "All" && "selected"}`]}
            >
              All
            </div>
            <div
              onClick={() => { handleClickClassify("Personal"); }}
              className={styles[`${classification === "Personal" && "selected"}`]}
            >
              Personal
            </div>
            <div
              onClick={() => { handleClickClassify("Team"); }}
              className={styles[`${classification === "Team" && "selected"}`]}
            >
              Team
            </div>
          </div>
        </div>
        <div className={styles["project-card-box"]}>
          {projectDataArray.map((projectData: ProjectDataType, index: number) => (
            <ProjectCard
              key={index}
              projectData={projectData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;