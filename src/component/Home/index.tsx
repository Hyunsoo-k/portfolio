import { JSX } from 'react'

import Main from '@/component/Main'
import Portfolio from '@/component/Portfolio'
import Skills from '@/component/Skills'
import Contact from '@/component/Contact'

import styles from './index.module.scss'

const Home = (): JSX.Element => {
  return(
    <div className={styles['component-container']}>
      <Main />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home;