import React, { FC, useEffect, useState } from 'react'

import { useObserver } from 'mobx-react'

import Banner from 'components/Banner'
import NextArrow from 'components/Arrows/NextArrow'
import PrevArrow from 'components/Arrows/PrevArrow'
import brand from 'sources/images/brandBanner.png'
import gradient from 'sources/images/gradients/banner.png'
import thread from 'sources/images/threads/brand.png'

import styles from './styles.module.scss'
import Slider from 'react-slick'

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


   
const settings = {
  arrows: false,
  dots: true,
  edgeFriction: 1,
  infinite: false,
  swipeToSlide: true,
  variableWidth: true,
  accessibility: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  focusOnSelect: true,
  draggable: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  rows: 1,

  responsive: [
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        variableWidth: false,

        appendDots: (dots: any) => <ul> {dots} </ul>,
      },
    },
  ],
}

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
