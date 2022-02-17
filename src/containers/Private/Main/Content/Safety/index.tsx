import React from 'react'

import safety from 'sources/images/safety.png'
import safety2 from 'sources/images/safety2.png'
import gradient from 'sources/images/gradients/safety.png'
import thread from 'sources/images/threads/safety.png'

import { securityList } from 'utils/lists'

import styles from './styles.module.scss'

const Safety: React.FC = () => {
  return (
    <section className={styles.safety}>
      <h2 className={styles.title}>Заботится о вашей безопасности</h2>

      <ul className={styles.list}>
        {securityList.map((item: any) => (
          <li key={item.id} className={styles.listItem}>
            <h4 className={styles.itemTitle}>{item.title}</h4>
            <p className={styles.text}>{item.text}</p>
            <img src={item.imgUrl} alt="item pic" className={styles.img} />
          </li>
        ))}
      </ul>

      <div className={styles.imagesContainer}>
        <img src={safety} alt="power1" className={styles.bigImg} />
        <img src={safety2} alt="power2" className={styles.smallImg} />
      </div>
      <img src={thread} className={styles.thread} alt="thread" />
      <img src={gradient} className={styles.gradient} alt="gradient" />
    </section>
  )
}

export default Safety
