import React, { FC } from 'react'

// style
import styles from './styles.module.scss'

const ThemeSwitcher: FC = () => {
  return (
    <div className={styles.switcherContainer} onClick={() => {}}>
      <span className={styles.light}>Белый</span>
      <span className={styles.dark}>Черный</span>
    </div>
  )
}

export default ThemeSwitcher
