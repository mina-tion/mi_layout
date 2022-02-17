import React from 'react'

import arrow from 'sources/images/icons/prev-arrow.png'
import styles from './styles.module.scss'

interface IProps {
  onClick?: any
}

const PrevArrow: React.FC<IProps> = ({ onClick }) => {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <img src={arrow} alt="" className={styles.arrow} />
    </div>
  )
}
export default PrevArrow
