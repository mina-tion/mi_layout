import React from 'react'

import design1 from 'sources/images/design.png'
import design2 from 'sources/images/design-2.png'

// style
import styles from './styles.module.scss'

const Design: React.FC = () => {
  return (
    <section className={styles.designBlock}>
      <h2 className={styles.title}>Лаконичный современный дизайн, в котором нет ничего лишнего</h2>

      <div className={styles.imageCardContainer}>
          <div className={styles.item}>
            <img src={design1} alt="design" className={styles.img} />
            <div className={styles.description}>
              <h4 className={styles.text}>Минималистичный дизайн </h4>
              <p className={styles.subtext}>
                Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство
                пользователя выходит на первое место. Одного прикосновения достаточно, чтобы
                запустить самокат.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <img src={design2} alt="design" className={styles.img} />
            <div className={styles.description}>
              <h4 className={styles.text}>Удобная панель управления</h4>
              <p className={styles.subtext}>
                Удобно расположенные элементы управления. Отображение 8 типов данных в реальном
                времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая
                информация.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Design
