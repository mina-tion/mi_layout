import React from 'react'


import img1 from 'sources/images/description1.png'
import img2 from 'sources/images/description2.png'
import thread from 'sources/images/threads/description.png'
import gradient from 'sources/images/gradients/description.png'
import gradient2 from 'sources/images/gradients/description2.png'
import gradient3 from 'sources/images/gradients/description3.png'

import { batteryList } from 'utils/lists'

import styles from './styles.module.scss'

const Battery: React.FC = () => {
  return (
    <section className={styles.description}>
      <img src={gradient} className={styles.gradient} alt="gradient" />

      <h2 className={styles.title}>
        Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км
      </h2>
      <ul className={styles.list}>
        {batteryList.map((item: any) => (
          <li key={item.id} className={styles.listItem}>
            <h4 className={styles.itemTitle}>{item.title}</h4>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>

      <div className={styles.imagesContainer}>
        <img src={img1} alt="power1" className={styles.bigImg} />
        <img src={img2} alt="power2" className={styles.smallImg} />
      </div>

      <img src={gradient2} className={styles.gradient2} alt="gradient" />
      <img src={gradient3} className={styles.gradient3} alt="gradient" />

      <img src={thread} className={styles.thread} alt="thread" />
    </section>
  )
}

export default Battery
