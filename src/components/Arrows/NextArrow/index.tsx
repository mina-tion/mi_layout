import React from 'react'

import arrow from 'sources/images/icons/next-arrow.png'
import styles from './styles.module.scss'

interface IProps {
  onClick?: any
}

const NextArrow: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <img src={arrow} alt="" className={styles.arrow} />
    </div>
  )
}

export default NextArrow
