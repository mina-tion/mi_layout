import React from 'react'

import imgSrc1 from 'sources/images/description-1.png'
import imgSrc2 from 'sources/images/description-2.png'
import List from 'components/List'
import Button from 'components/Button'
import Slider from './Slider'

// style
import styles from './styles.module.scss'
import { descriptionList } from 'utils/lists'

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Отзывы о Mi Scooter Pro 2</h2>

    {/*   <Slider />  */}

      <div className={styles.controls}>
        <Button text='Оставить отзыв'/>
      </div>
    </section>
  )
}

export default Reviews
