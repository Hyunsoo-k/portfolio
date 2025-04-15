import { Dispatch, SetStateAction, JSX, MouseEvent, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { FcDeployment } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

import { ProjectDataType } from "@/type/ProjectDataType";
import { TechnologyStackBadgeKeyType, technologyStackBadgeMap, TechnologyStackBadgeType } from "@/projectData/technologyStackBadge";

import styles from "./index.module.scss";

interface Props {
  setReadmeModalOpen: Dispatch<SetStateAction<boolean>>;
  projectData: ProjectDataType;
};

const ReadmeModal = ({ setReadmeModalOpen, projectData }: Props): JSX.Element => {
  const {
    projectName,
    position,
    personnel,
    introduce,
    feature,
    link,
    background,
    detail,
    technologyStack
  } = projectData;

  const overLayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOverlay = (e: globalThis.MouseEvent): void => {
      document.body.style.overflow = "hidden";

      const targetNode = e.target as Node;

      if (
        overLayRef.current &&
        contentRef.current &&
        overLayRef.current.contains(targetNode) &&
        !contentRef.current.contains(targetNode)
      ) {
        setReadmeModalOpen(false);
      }
    };

    window.addEventListener("click", handleClickOverlay);

    return (): void => {
      document.body.style.overflow = "auto";
      window.removeEventListener("click", handleClickOverlay);
    };
  }, []);

  const handleClickClose = (e: MouseEvent<SVGAElement>): void => {
    e.stopPropagation();

    setReadmeModalOpen(false);
  };

  return createPortal(
    <div ref={overLayRef} className={styles["component-container"]}>
      <div ref={contentRef} className={styles["content"]}>
        <div className={styles["header"]}>
          README.md
          <IoCloseOutline onClick={handleClickClose} size={27} />
        </div>
        <div className={styles["main"]}>
          <h1>{projectName}</h1>
          <span>
            {personnel}, {position}
          </span>
          <div className={styles["article-box"]}>
            <div className={styles["article__link"]}>
              <h2>🔗 Link</h2>
              <div className={styles["link-box"]}>
                {link.deployment && (
                  <a href={link.deployment} target="_blank">
                    <FcDeployment size={18} />
                    {link.deployment}
                  </a>
                )}
                {link.gitHub && (
                  <a href={link.gitHub} target="_blank">
                    <FaGithub size={18} color="black" />
                    {link.gitHub}
                  </a>
                )}
              </div>
            </div>
            <div className={styles["article__summary"]}>
              <h2>📌 Summary</h2>
              <p>{introduce}</p>
              <ul>
                {feature?.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className={styles["article__background"]}>
              <h2>🤔 Background</h2>
              <p>{background}</p>
            </div>
            <div className={styles["article__detail"]}>
              <h2>🔍 Detail</h2>
              <p>{detail}</p>
            </div>
            <div className={styles["article__technology-stack"]}>
              <h2>🛠️ Technology Stack</h2>
              <div className={styles["badge-box"]}>
                {technologyStack.map((technologyStack: TechnologyStackBadgeKeyType, index: number) => (
                  <img
                    key={index}
                    src={technologyStackBadgeMap[technologyStack as keyof TechnologyStackBadgeType]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ReadmeModal;
