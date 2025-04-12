import { JSX, useState } from "react";
import { CgReadme } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";

import { ProjectDataType } from "@/type/ProjectDataType";
import ReadmeModal from "../Modal/ReadmeModal";
import ProjectImageModal from "../Modal/ProjectImageModal";

import styles from "./index.module.scss";

interface Props {
  projectData: ProjectDataType;
};

const ProjectCard = ({ projectData }: Props): JSX.Element => {
  const {
    projectName,
    position,
    personnel,
    introduce,
    feature,
    image
  } = projectData;

  const [readmeModalOpen, setReadmeModalOpen] = useState<boolean>(false);
  const [projectImageModalOpen, setProjectImageModalOpen] = useState<boolean>(false);

  const handleClickReadmeSpan = (): void => {
    setReadmeModalOpen(true);
  };

  const handleClickImageSpan = (): void => {
    setProjectImageModalOpen(true);
  };

  return (
    <div className={styles["over-lay"]}>
      <div
        className={styles["component-container"]}
        style={{
          backgroundImage: `url(/projectImage/${projectName}/mainImage.png)`,
        }}
      >
        <div className={styles["main"]}>
          <h2 className={styles["poject-name"]}>{projectName}</h2>
          <span>
            {position}, {personnel}
          </span>
          <p>{introduce}</p>
          <ul>
            {feature?.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className={styles["bottom"]}>
            <span onClick={handleClickReadmeSpan}>
              <CgReadme size={20} />
              README
            </span>
            {image && (
              <span onClick={handleClickImageSpan}>
                <CiImageOn size={20} />
                Image
              </span>
            )}
          </div>
        </div>
      </div>
      {readmeModalOpen && (
        <ReadmeModal
          setReadmeModalOpen={setReadmeModalOpen}
          projectData={projectData} 
        />
      )}
      {projectImageModalOpen && image && (
        <ProjectImageModal
          setProjectImageModalOpen={setProjectImageModalOpen}
          image={image}
        />
      )}
    </div>
  );
};

export default ProjectCard;
