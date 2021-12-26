import React from 'react'

import Button from 'components/Button'
import Logo from 'components/Logo'
import NavigationBar from './NavigationBar'

import gradient from 'sources/images/gradients/header.png'
// style
import styles from './styles.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerBlock}>
        <Logo isOrange={false} />
        <NavigationBar />
      </div>
      <Button text="Купить" />

      <img src={gradient} className={styles.gradient} alt="gradient" />
    </header>
  )
}

export default Header
