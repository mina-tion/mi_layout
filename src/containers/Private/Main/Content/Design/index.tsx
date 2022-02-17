import React, {useState, useEffect} from 'react'

import ImageCard from './ImageCard'

import gradient from 'sources/images/gradients/design.png'
import thread from 'sources/images/threads/design.png'

import { cards } from 'utils/lists'

import styles from './styles.module.scss'

const Design: React.FC = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  const onResize = () => {
    setWidth(document.documentElement.clientWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <section className={styles.designBlock}>
      <h2 className={styles.title}>Лаконичный современный дизайн, в котором нет ничего лишнего</h2>

      <div className={styles.imageCardContainer}>
        {cards.map(card => (
          <ImageCard key={card.id} title={card.title} text={card.text} imgUrl={card.imgUrl!} />
        ))}
      </div>
      <img src={gradient} className={styles.gradient} alt="gradient" />
      <img src={thread} className={styles.thread} alt="line" />
    </section>
  )
}

export default Design
