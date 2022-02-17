import React, { FC, useEffect, useState } from 'react'

import Banner from 'components/Banner'
import NextArrow from 'components/Arrows/NextArrow'
import PrevArrow from 'components/Arrows/PrevArrow'
import brand from 'sources/images/brandBanner.png'
import gradient from 'sources/images/gradients/banner.png'
import thread from 'sources/images/threads/brand.png'

import styles from './styles.module.scss'

const Brand: FC = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  const onResize = () => {
    setWidth(document.documentElement.clientWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])


  return (
    <div className={styles.bannerContainer}>
      <Banner
        imgUrl={brand}
        title={'О бренде Xiaomi'}
        text={`Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех».
            Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому.
            `}
        isOrange={width >= 480}
      />
      <img src={thread} className={styles.thread} alt="thread" />
      <img src={gradient} className={styles.gradient} alt="gradient" />
    </div>
  )
}

export default Brand
