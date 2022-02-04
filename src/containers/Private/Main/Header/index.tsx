import React, { useState, useEffect, FC } from 'react'

import { useStore } from 'stores'
import { useObserver } from 'mobx-react'

import NavigationBar from './NavigationBar'
import Button from 'components/Button'
import Logo from 'components/Logo'

import gradient from 'sources/images/gradients/header.png'
import gradient2 from 'sources/images/gradients/header2.png'

// style
import styles from './styles.module.scss'
import Burger from 'components/Burger'

const Header: FC = () => {
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
  return useObserver(() => (
    <header className={styles.header}>
      <div className={styles.headerBlock}>
        {width <= 960 ? <Logo isOrange={true} /> : <Logo isOrange={!themeStore.darkTheme} />}

        <NavigationBar />
      </div>
      <div className={styles.buttonContainer}>
        {' '}
        <Button text="Купить" />
      </div>

      <Burger />
      <img src={gradient} className={styles.gradient} alt="gradient" />
      <img src={gradient2} className={styles.gradient2} alt="gradient" />
    </header>
  ))
}

export default Header
