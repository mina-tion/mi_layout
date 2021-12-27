import React, { FC } from 'react'

import { useObserver } from 'mobx-react'

import Header from './Header'
import Footer from './Footer'
import Intro from './Content/Intro'
import Description from './Content/Description'
import Design from './Content/Design'
import Mobile from './Content/Mobile'
import Banner from 'components/Banner'
import Reviews from './Content/Reviews'
import speed from 'sources/images/speedBanner.jpg'
import brand from 'sources/images/brandBanner.png'

import styles from './styles.module.scss'
import Safety from './Content/Safety'
import Questions from './Content/Questions'

const Main: FC = () => {
  return useObserver(() => (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>
          <Intro />
          <Description />
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
          <Questions/>
        </main>
        <Footer />
      </div>
    </div>
  ))
}

export default Main
