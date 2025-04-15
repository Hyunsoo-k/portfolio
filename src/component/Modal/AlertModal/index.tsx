import { Dispatch, JSX, MouseEvent, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiCheckCircle } from "react-icons/fi";

import styles from "./index.module.scss";

interface Props {
  setAlertModalOpen: Dispatch<SetStateAction<boolean>>;
};

const AlertModal = ({ setAlertModalOpen }: Props): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return (): void => {
      document.body.style.overflow = "auto";
    }
  }, [])
  const handleClickButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    setAlertModalOpen(false);  
  };

  return createPortal(
    <div className={styles["over-lay"]}>
      <div className={styles["component-container"]}>
        <FiCheckCircle
          size={50}
          color="#D6223B"
        />
        <span>전송되었습니다!</span>
        <button
          type="button"
          onClick={handleClickButton}
        >
          확인
        </button>
      </div>
    </div>,
    document.body
  );
};

export default AlertModal;
