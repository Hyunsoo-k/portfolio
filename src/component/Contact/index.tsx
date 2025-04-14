import { JSX } from "react";
import { useForm } from "react-hook-form";

import styles from "./index.module.scss";

const Contact = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (watch: Record<string, string>): void => {
    console.log(watch);
  };

  const onError = (erros: any): void => {
    console.log(erros);
  };

  return(
    <div id="Contact" className={styles["component-container"]}>
      <div className={styles["main"]}>
        <div className={styles["contact"]}>
          <div className={styles["header"]}>
            <div className={styles["title"]}>
              <h1>Contact</h1>
            </div>
          </div>
          <div className={styles["contact__content"]}>
            <div className={styles["content__item"]}>
              <div className={styles["image-wrapper"]}>
                <img src="/contactImage/phoneImage.png" />
              </div>
              <div className={styles["text-field"]}>
                <label>연락처</label>
                <span>010-7591-2177</span>
              </div>
            </div>
            <div className={styles["content__item"]}>
              <div className={styles["image-wrapper"]}>
                <img src="/contactImage/emailImage.png" />
              </div>
              <div className={styles["text-field"]}>
                <label>이메일</label>
                <span>anthony117@naver.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["drop-a-line"]}>
          <div className={styles["header"]}>
            <div className={styles["title"]}>
              <h1>Drop a Line</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className={styles["input-wrapper"]}>
              <input
                {...register("name", {
                  required: "필수 값 입니다."
                })}
                autoComplete="off" 
                placeholder="성함"
              />
              {errors?.name &&
                <small>
                  {typeof errors.name.message === "string" ? errors.name.message  : ""}
                </small>
              }
            </div>
            <div className={styles["input-wrapper"]}>
              <input
                {...register("email", {
                  required: "필수 값 입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "이메일 형식에 맞지 않습니다",
                  },
                })}
                autoComplete="off" 
                placeholder="이메일"
              />
              {errors?.email &&
                <small>
                  {typeof errors.email.message === "string" ? errors.email.message  : ""}
                </small>
              }
            </div>
            <div className={styles["input-wrapper"]}>
              <input
                {...register("phone", {
                  required: "필수 값 입니다.",
                  minLength: {
                    value: 8,
                    message: "최소 8자 이상 입력해주세요.",
                  },
                })}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '')
                }}
                maxLength={11}
                autoComplete="off"
                placeholder="연락처 (하이폰 제외)"
              />
              {errors?.phone &&
                <small>
                  {typeof errors.phone.message === "string" ? errors.phone.message  : ""}
                </small>
              }
            </div> 
            <div className={styles["input-wrapper"]}>
              <input
                autoComplete="off" 
                placeholder="예산"
              />
            </div>
            <div className={styles["textarea-wrapper"]}>
              <textarea
                {...register("message", {
                  required: "필수 값 입니다."
                })}
                autoComplete="off" 
                placeholder="내용"
              />
              {errors?.message &&
                <small>
                  {typeof errors.message.message === "string" ? errors.message.message  : ""}
                </small>
              }
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;