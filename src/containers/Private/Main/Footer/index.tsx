import React, { FC } from 'react'

// style
import styles from './styles.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContainer}>
        <p>© 2010 - 2021 Xiaomi.</p>
        <p>Все права защищены.</p>
      </div>
      <div className={styles.rightContainer}>
        <p>8 800 775 66 15</p>
        <p>Часы работы с 9:00 до 20:00 МСК, Пн. – Пт.</p>
      </div>
    </footer>
  )
}

export default Footer
