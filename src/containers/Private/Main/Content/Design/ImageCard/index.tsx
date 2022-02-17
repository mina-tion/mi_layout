import React from 'react'

import styles from './styles.module.scss'

interface Props {
  title: string
  text: string
  imgUrl: string
}

const ImageCard: React.FC<Props> = ({ title, text, imgUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imgUrl} alt="design" className={styles.image} />
      </div>
      
      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default ImageCard
