import React from 'react'

import { navItems } from 'utils/lists'

import styles from './styles.module.scss'

const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {navItems.map(item => (
        <a key={item.id} className={styles.item} href={item.link}>
          {item.title}
        </a>
      ))}
    </nav>
  )
}

export default NavigationBar
