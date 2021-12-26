import React from 'react'

import imgSrc1 from 'sources/images/description-1.png'
import imgSrc2 from 'sources/images/description-2.png'
import List from 'components/List'
import lineSrc from 'sources/images/treads/description.png';
import gradient from 'sources/images/gradients/description.png'
// style
import styles from './styles.module.scss'
import { descriptionList } from 'utils/const'

const Description: React.FC = () => {
  return (
    <section className={styles.description}>
      <img src={gradient} className={styles.gradient} alt="gradient" />

      <h2 className={styles.title}>
        Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км
      </h2>

      <List list={descriptionList} />

      <div className={styles.imagesContainer}>
        <img src={imgSrc1} alt="power1" className={styles.bigImg} />
        <img src={imgSrc2} alt="power2" className={styles.smallImg} />
      </div>

       <img src={lineSrc} className={styles.bottomLine} alt="line" /> 
    </section>
  )
}

export default Description
