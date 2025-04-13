import { JSX } from 'react'

import Main from '@/component/Main'
import Portfolio from '../Portfolio'
import Skills from '../Skills'

import styles from './index.module.scss'

const Home = (): JSX.Element => {
  return(
    <div className={styles['component-container']}>
      <Main />
      <Portfolio />
      <Skills />
    </div>
  )
}

export default Home;