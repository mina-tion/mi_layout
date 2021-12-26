import React from 'react'

import ThemeSwitcher from 'components/ThemeSwitcher'

import whiteBike from 'sources/images/dark-header-bike.png'

import styles from './styles.module.scss'

const Intro: React.FC = () => {
  return (
    <section className={styles.intro}>
      <img src={whiteBike} alt="bike" className={styles.bikeImg} />

      <div className={styles.introContainer}>
        <h1 className={styles.introTitle}>
          Стильный электросамокат <br />с мощным аккумулятором
        </h1>
        <div className={styles.introText}>
          Улучшенная производительность для дальних путешествий. <br />
          Работает так же просто, <br /> как и выглядит.
        </div>

        <ThemeSwitcher />
      </div>
    </section>
  )
}

export default Intro
