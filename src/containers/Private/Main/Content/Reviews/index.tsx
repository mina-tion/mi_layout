import React from 'react'

import Button from 'components/Button'
import Slider from './Slider'

// style
import styles from './styles.module.scss'

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Отзывы о Mi Scooter Pro 2</h2>

      <Slider />

      <div className={styles.controls}>
        <Button text="Оставить отзыв" />
      </div>
    </section>
  )
}

export default Reviews
