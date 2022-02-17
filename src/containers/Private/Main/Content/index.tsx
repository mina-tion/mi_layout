import React, { FC } from 'react'

import { useObserver } from 'mobx-react'
import Intro from './Intro'
import Design from './Design'
import Mobile from './Mobile'
import Safety from './Safety'
import Questions from './Questions'
import Set from './Set'
import Battery from './Battery'
import Reviews from './Reviews'
import Speed from './Speed'

import styles from './styles.module.scss'
import Brand from './Brand'

const Content: FC = () => {
  return useObserver(() => (
    <main className={styles.content}>
      <Intro />
      <Battery />
      <Speed />
      <Design />
      <Safety />
      <Mobile />
      <Brand />
      <Reviews />
      <Questions />
      <Set />
    </main>
  ))
}

export default Content
