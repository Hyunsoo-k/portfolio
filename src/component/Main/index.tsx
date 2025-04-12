import { JSX } from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaBold } from "react-icons/fa6";

import styles from './index.module.scss'

const Main = (): JSX.Element => {
  return (
    <div className={styles['component-container']}>
      <div className={styles['content']}>
        <div className={styles['text-area']}>
          <div className={styles['greeting-box']}>
            <span>안녕하세요! 저는</span>
          </div>
          <div className={styles['name-box']}>
            <span>웹 & 서버 개발자 김현수 입니다</span>
            <small>Web & Server developer Hyunsoo kim</small>
          </div>
          <div className={styles['introduce-box']}>
            <span>
              React와 TypeScript 기반의 클라이언트 개발과, Node.js 환경에서 Express와 MongoDB를 활용한 서버, 미들웨어 개발을 합니다. 
              전체적인 관점에서의 서비스 흐름을 이해하고, 새로운 기술들을 학습하고 적용하는 데에 두려움이 없는 점이 저의 강점입니다.
            </span>
          </div>
        </div>
        <div className={styles['image-area']}>
          <img src="/projectImage/mainImage.png" />
        </div>
        <div className={styles['follow-me-area']}>
          <span>FOLLOW ME ON :</span>
          <div className={styles['line']}></div>
          <div className={styles['icon-box']}>
            <FaGithub
              size={25}
              color="#B02148"
            />
            <FaBold
              size={25}
              color="#B02148"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;