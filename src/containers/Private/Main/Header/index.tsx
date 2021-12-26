import React from 'react'

import NavigationBar from './NavigationBar'
import Button from 'components/Button'
import Logo from 'components/Logo'

import gradient from 'sources/images/gradients/header.png'
import gradient2 from 'sources/images/gradients/header2.png'

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
      <img src={gradient2} className={styles.gradient2} alt="gradient" />
    </header>
  )
}

export default Header
