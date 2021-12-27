import React from 'react';
import Slider from 'react-slick';
/* 
import NextArrow from './Arrows/NextArrow';
import PrevArrow from './Arrows/PrevArrow'; */

import styles from './styles.module.scss';

 const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
  
const _Slider: React.FC = () => {
  return (

    <div>
        <h2> Responsive </h2>
        <Slider {...settings} className={styles.slider}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
    
    {/* <Slider {...sliderSettings} className={styles.slider}>
      <div className={styles.slide}>
        <h4 className={styles.name}>Михаил Сафонов</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса -
          десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах
          Xiaomi - Удобства переноски (вес аппарата, развесовка).
        </p>
        <p className={styles.text}>
          В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе
          самоката.
        </p>
      </div>

      <div className={styles.slide}>
        <h4 className={styles.name}>Имя скрыто</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Владею также первой версией самоката (m365). В версии pro 2 исправлено множество
          недостатков m365:
        </p>
        <p className={styles.innerText}>- усилен узел складывания и язычок </p>
        <p className={styles.innerText}>
          - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку
          из-за тряски
        </p>
        <p className={styles.innerText}>
          - установлена поддержка заднего крыла и защита провода заднего габарита.
        </p>
      </div>

      <div className={styles.slide}>
        <h4 className={styles.name}>Алексей З.</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км
          и еще оставалось 16% заряда.
        </p>
        <p className={styles.text}>
          ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос
          от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными
        </p>
      </div>

      <div className={styles.slide}>
        <h4 className={styles.name}>Михаил Сафонов</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Выбирал между двумя моделями: этим Mi Scooter Pro 2 и Ninebot Max 30P, в плюсах Макса -
          десятидюймовая резина и дальность пробега на одном заряде, скорость зарядки. В плюсах
          Xiaomi - Удобства переноски (вес аппарата, развесовка).
        </p>
        <p className={styles.text}>
          В итоге купил Xiaomi и поставил 10 дюймовые шины - получил комфорт при небольшом весе
          самоката.
        </p>
      </div>

      <div className={styles.slide}>
        <h4 className={styles.name}>Имя скрыто</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Владею также первой версией самоката (m365). В версии pro 2 исправлено множество
          недостатков m365:
        </p>
        <p className={styles.innerText}>- усилен узел складывания и язычок </p>
        <p className={styles.innerText}>
          - батарея находится в отдельном жёстком алюминиевом корпусе, что исключает её поломку
          из-за тряски{' '}
        </p>
        <p className={styles.innerText}>
          - установлена поддержка заднего крыла и защита провода заднего габарита.
        </p>
      </div>

      <div className={styles.slide}>
        <h4 className={styles.name}>Алексей З.</h4>
        <div className={styles.orangeLine}></div>
        <p className={styles.text}>
          Мой вес 57кг, прошитый с максимальной 32км в час в режиме S по Москве у меня осилил - 25км
          и еще оставалось 16% заряда.
        </p>
        <p className={styles.text}>
          ОБЯЗАТЕЛЬНО: следите за давлением в камерах. Прям очень советую купить электронный насос
          от Xiaomi, и раз в неделю подкачивайте. С завода самокат приезжает с сильно недокачанными
        </p>
      </div>
    </Slider> */}
     </div>
  );
};

export default _Slider;
