import React from 'react'
import cn from 'classnames'

import ImageCard from './ImageCard'

import design1 from 'sources/images/design.png'
import design2 from 'sources/images/design-2.png'

import styles from './styles.module.scss'

const cards = [
  {
    id: 0,
    title: 'Минималистичный дизайн',
    text: `Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство
    пользователя выходит на первое место. Одного прикосновения достаточно, чтобы
    запустить самокат.`,
    imgUrl: design1,
  },
  {
    id: 1,
    title: 'Удобная панель управления',
    text: `Удобно расположенные элементы управления. Отображение 8 типов данных в реальном
    времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая
    информация.`,
    imgUrl: design2,
  }, 
]

const Design: React.FC = () => {
  return (
    <section className={styles.designBlock}>
      <h2 className={styles.title}>
        Лаконичный современный дизайн, <br /> в котором нет ничего лишнего
      </h2>

      <div className={styles.imageCardContainer}>
        {cards.map(card => (
          <ImageCard key={card.id} title={card.title} text={card.text} imgUrl={card.imgUrl!} />
        ))}
      </div>
    </section>
  )
}

export default Design
