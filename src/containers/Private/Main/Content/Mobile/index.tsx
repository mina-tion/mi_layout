import React, {useState, useEffect} from 'react'

import { useStore } from 'stores'

import darkPhone from 'sources/images/dark-mobile.png'
import lightPhone from 'sources/images/light-mobile.png'
import phone from 'sources/images/mobile.png'
import appStore from 'sources/images/icons/appStore.png'
import playMarket from 'sources/images/icons/playMarket.png'
import appStoreDark from 'sources/images/icons/appStoreDark.png'
import playMarketDark from 'sources/images/icons/playMarketDark.png'
import gradient from 'sources/images/gradients/mobile.png'
import gradient2 from 'sources/images/gradients/mobile2.png'
import thread from 'sources/images/threads/mobile.png'

import styles from './styles.module.scss'
import { useObserver } from 'mobx-react'

const Mobile: React.FC = () => {
  const { themeStore } = useStore()
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

  let phoneSrc = phone
  if (width <= 960) {
    phoneSrc = phone
  } else if (themeStore.darkTheme) phoneSrc = darkPhone
  else phoneSrc = lightPhone

  return useObserver(() => (
    <section className={styles.mobileApp}>
      <div className={styles.description}>
        <h4 className={styles.title}>Мобильное приложение Mi Home</h4>
        <p className={styles.text}>
          Подключите самокат к мобильному приложению Mi Home и используйте его для блокировки и
          разблокировки самоката, а так же просмотра основных данных: пробег, скорость, уровень
          заряда аккумулятора.
        </p>

        <div className={styles.iconsContainer}>
          <img
            src={!themeStore.darkTheme || width <= 960 ? appStoreDark : appStore}
            alt="app store"
            className={styles.icon}
          />
          <img
            src={themeStore.darkTheme ? playMarket : playMarketDark}
            alt="play market"
            className={styles.icon}
          />
        </div>
      </div>

      <img
        src={phoneSrc}
        alt="mobile phone"
        className={styles.phone}
      />

      <img src={gradient} className={styles.gradient} alt="gradient" />
      <img src={thread} className={styles.thread} alt="line" />
      <img src={gradient2} className={styles.gradient2} alt="gradient" />
    </section>
  ))
}

export default Mobile
