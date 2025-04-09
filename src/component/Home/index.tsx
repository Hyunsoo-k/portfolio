import { JSX } from 'react'

import Main from '@/component/Main'

import styles from './index.module.scss'

const Home = (): JSX.Element => {
  return(
    <div className={styles['component-container']}>
      <Main />
    </div>
  )
}

export default Home;