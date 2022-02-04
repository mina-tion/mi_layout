import React, { FC } from 'react'

import burger from 'sources/images/icons/burger.png'

// style
import styles from './styles.module.scss'

const Burger: FC = () => {
  return <img className={styles.icon} src={burger} alt="logotype" />
}

export default Burger
