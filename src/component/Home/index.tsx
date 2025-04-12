import { JSX } from 'react'

import Main from '@/component/Main'
import Portfolio from '../Portfolio'

import styles from './index.module.scss'

const Home = (): JSX.Element => {
  return(
    <div className={styles['component-container']}>
      <Main />
      <Portfolio />
    </div>
  )
}

export default Home;