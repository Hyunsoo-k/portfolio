import { Dispatch, SetStateAction, JSX, useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import styles from "./index.module.scss";

interface Props {
  setProjectImageModalOpen: Dispatch<SetStateAction<boolean>>;
  image: string[];
};

const ProjectImageModal = ({
  setProjectImageModalOpen,
  image
}: Props): JSX.Element => {
  const overLayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const carouselItemWrapperRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef<boolean>(false)

  const [currentIndex, setCurrentIndex] = useState<number>(1);

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
        setProjectImageModalOpen(false);
      }
    };

    window.addEventListener("click", handleClickOverlay);

    return (): void => {
      document.body.style.overflow = "auto";
      window.removeEventListener("click", handleClickOverlay);
    };
  }, []);

  const handleClickBackArrow = () => {
    if (isAnimating.current || currentIndex <= 1) return;
  
    const target = carouselItemWrapperRef.current?.children[0] as HTMLElement;
    if (!target) return;
  
    isAnimating.current = true;
    setCurrentIndex(prev => prev - 1);
  
    carouselItemWrapperRef.current?.scrollBy({
      left: -target.getBoundingClientRect().width,
      behavior: "smooth"
    });
  
    setTimeout(() => {
      isAnimating.current = false;
    }, 300);
  };
  
  const handleClickFrontArrow = () => {
    if (isAnimating.current || currentIndex >= image.length) return;
  
    const target = carouselItemWrapperRef.current?.children[0] as HTMLElement;
    if (!target) return;
  
    isAnimating.current = true;
    setCurrentIndex(prev => prev + 1);
  
    carouselItemWrapperRef.current?.scrollBy({
      left: target.getBoundingClientRect().width,
      behavior: "smooth"
    });
  
    setTimeout(() => {
      isAnimating.current = false;
    }, 300);
  };

  return (
    <div ref={overLayRef} className={styles["over-lay"]}>
      <div
        className={styles["component-container"]}
        ref={contentRef}
      >
        <div className={styles["carousel"]}>
          <div
            ref={carouselItemWrapperRef}
            className={styles["carousel__item-box"]}
          >
            {image.map((src: string, index: number) => (
              <div
                key={index}
                className={styles["carousel__item"]}
                style={{
                  backgroundImage: `url(${src})`
                }}
              >
              </div>
            ))}
          </div>
          <div className={styles["carousel__page"]}>
            <IoIosArrowBack
              size={20}
              color="#000000"
              onClick={handleClickBackArrow}
              style={{ visibility: currentIndex > 1 ? "visible" : "hidden" }}
            />
            <div>{currentIndex} / {image.length}</div>
            <IoIosArrowForward
              size={20}
              color="#000000"
              onClick={handleClickFrontArrow}
              style={{ visibility: currentIndex !== image.length ? "visible" : "hidden" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImageModal;