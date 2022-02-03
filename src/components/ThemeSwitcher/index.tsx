import React, { FC, useEffect } from 'react'
import cn from 'classnames'

import { useStore } from 'stores'
// style
import styles from './styles.module.scss'
import { useObserver } from 'mobx-react'

const ThemeSwitcher: FC = () => {
  const { themeStore } = useStore()
  const { darkTheme, changeTheme } = themeStore

  useEffect(() => {
    darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }, [darkTheme])

  const handlerClick = () => {
    changeTheme()
  }

  return useObserver(() => (
    <div
      className={cn(styles.switcherContainer, !darkTheme && styles.switchOn)}
      onClick={handlerClick}
    >
      <span className={styles.light}>Белый</span>
      <span className={styles.dark}>Черный</span>
    </div>
  ))
}

export default ThemeSwitcher
