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


const Main: FC = () => {
  return useObserver(() => (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>
          <Intro />
          <Battery />
          <Banner
            imgUrl={speed}
            title={'Высокая скорость передвижения'}
            text={`Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч.`}
            isOrange={false}
          />
          <Design />
          <Safety />
          <Mobile />
          <Banner
            imgUrl={brand}
            title={'О бренде Xiaomi'}
            text={`Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех».
            Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому.
            `}
            isOrange={true}
          />
          <Reviews />
          <Questions />
          <Set />
        </main>
        <Footer />
      </div>
    </div>
  ))
}

export default Main
