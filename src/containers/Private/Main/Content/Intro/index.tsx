import React, { useState, useEffect, FC } from 'react'

import { useStore } from 'stores'
import { observer } from 'mobx-react'

import ThemeSwitcher from 'components/ThemeSwitcher'

import whiteBike from 'sources/images/dark-header-bike.png'
import blackBike from 'sources/images/light-header-bike.png'
import bike from 'sources/images/header-bike-tablets.png'
import styles from './styles.module.scss'

const Intro: FC = observer(() => {
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

  let bikeSrc = bike
  if (width <= 960) {
    bikeSrc = bike
  } else if (themeStore.darkTheme) bikeSrc = whiteBike
  else bikeSrc = blackBike

  return (
    <section className={styles.intro}>
      <img src={bikeSrc} alt="bike" className={styles.bikeImg} />

      <div className={styles.introContainer}>
        <h1 className={styles.introTitle}>Стильный электросамокат с мощным аккумулятором</h1>
        <div className={styles.introText}>
          Улучшенная производительность для дальних путешествий. <br />
          Работает так же просто, <br /> как и выглядит.
        </div>

        <ThemeSwitcher />
      </div>
    </section>
  )
})

export default Intro
