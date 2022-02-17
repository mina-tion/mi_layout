import React, { FC } from 'react'

import { useObserver } from 'mobx-react'

import Header from './Header'
import Footer from './Footer'
import Intro from './Content/Intro'
import Design from './Content/Design'
import Mobile from './Content/Mobile'
import Safety from './Content/Safety'
import Questions from './Content/Questions'
import Set from './Content/Set'
import Battery from './Content/Battery'
import Reviews from './Content/Reviews'

import Banner from 'components/Banner'

import speed from 'sources/images/speedBanner.jpg'
import brand from 'sources/images/brandBanner.png'

import styles from './styles.module.scss'
import Content from './Content'


const Main: FC = () => {
  return useObserver(() => (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  ))
}

export default Main
