import React from 'react'
import Slider from 'react-slick'

import NextArrow from 'components/Arrows/NextArrow'
import PrevArrow from 'components/Arrows/PrevArrow'

import styles from './styles.module.scss'

const settings = {
  arrows: true,
  centerMode: false,
  edgeFriction: 1,
  infinite: false,
  swipeToSlide: true,
  variableWidth: true,
  accessibility: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />, 
  focusOnSelect: true,
  draggable: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,

   responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        dots: true,
        appendDots: (dots: any) => <ul> {dots} </ul>,
      },
    },
  ],
}

const _Slider: React.FC = () => {
  return (
    <div>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.slide}>
          <h4 className={styles.name}>Михаил Сафонов</h4>
          <p className={styles.text}>
            Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса -
            десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах
            Xiaomi - Удобства переноски (вес аппарата, развесовка).
            <br />
            <br />В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом
            весе самоката.
          </p>
        </div>

        <div className={styles.slide}>
          <h4 className={styles.name}>Имя скрыто</h4>
          <p className={styles.text}>
            Владею также первой версией самоката (m365). В версии pro 2 исправлено множество
            недостатков m365:
            <br />
            <br />- усилен узел складывания и язычок
            <br />- батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её
            поломку из-за тряски
            <br />- установлена поддержка заднего крыла и защита провода заднего габарита.
          </p>
        </div>

        <div className={styles.slide}>
          <h4 className={styles.name}>Алексей З.</h4>
          <p className={styles.text}>
            Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил -
            25км и еще оставалось 16% заряда.
            <br />
            ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос
            от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно
            недокачанными
          </p>
        </div>

        <div className={styles.slide}>
          <h4 className={styles.name}>Михаил Сафонов</h4>
          <p className={styles.text}>
            Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса -
            десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах
            Xiaomi - Удобства переноски (вес аппарата, развесовка).<br />
            <br />В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом
            весе самоката.
          </p>
        </div>

        <div className={styles.slide}>
          <h4 className={styles.name}>Имя скрыто</h4>
          <p className={styles.text}>
            Владею также первой версией самоката (m365). В версии pro 2 исправлено множество
            недостатков m365:
            <br />
            <br />- усилен узел складывания и язычок
            <br />- батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её
            поломку из-за тряски
            <br />- установлена поддержка заднего крыла и защита провода заднего габарита.
          </p>
        </div>

        <div className={styles.slide}>
          <h4 className={styles.name}>Алексей З.</h4>
          <p className={styles.text}>
            Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил -
            25км и еще оставалось 16% заряда.
            <br />
            <br />
            ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос
            от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно
            недокачанными
          </p>
        </div>
      </Slider>
    </div>
  )
}

export default _Slider
