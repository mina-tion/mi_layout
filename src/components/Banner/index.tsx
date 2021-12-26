import React, { FC } from 'react'

import Logo from 'components/Logo'

// style
import styles from './styles.module.scss'
import cn from 'classnames'

interface Props {
  imgUrl: string
  title: string
  text: string
  isOrange?: boolean
}

const Banner: FC<Props> = ({ imgUrl, title, text, isOrange }) => {
  return (
    <section className={styles.banner}>
      <img src={imgUrl} alt="background" className={styles.background} />
      <div className={styles.content}>
        <Logo isOrange={isOrange} />
        <h2 className={cn(styles.title, { [styles.orange]: isOrange })}>{title}</h2>
        <p className={cn(styles.text, { [styles.black]: isOrange })}>{text}</p>
      </div>
    </section>
  )
}

export default Banner
