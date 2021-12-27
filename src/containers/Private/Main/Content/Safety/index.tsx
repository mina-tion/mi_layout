import React from 'react'

import List from 'components/List'

import safety from 'sources/images/safety.png'
import safety2 from 'sources/images/safety2.png'
import gradient from 'sources/images/gradients/safety.png'

import { securityList } from 'utils/lists'

import styles from './styles.module.scss'

const Safety: React.FC = () => {
  return (
    <section className={styles.safety}>
      <h2 className={styles.title}>Заботится о вашей безопасности</h2>

      <List list={securityList} />

      <div className={styles.imagesContainer}>
        <img src={safety} alt="power1" className={styles.bigImg} />
        <img src={safety2} alt="power2" className={styles.smallImg} />
      </div>

      <img src={gradient} className={styles.gradient} alt="gradient" />
    </section>
  )
}

export default Safety
