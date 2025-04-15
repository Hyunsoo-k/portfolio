import { Dispatch, JSX, MouseEvent, SetStateAction, useEffect } from "react";
import { UseFormReset } from "react-hook-form";
import { createPortal } from "react-dom";
import { FiCheckCircle } from "react-icons/fi";

import styles from "./index.module.scss";

interface ResetFormType {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message:string;
};

interface Props {
  setAlertModalOpen: Dispatch<SetStateAction<boolean>>;
  reset: UseFormReset<ResetFormType>;
};

const AlertModal = ({ setAlertModalOpen, reset }: Props): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return (): void => {
      document.body.style.overflow = "auto";
    }
  }, [])
  const handleClickButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    reset();
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
