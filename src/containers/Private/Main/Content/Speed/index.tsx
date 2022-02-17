import React, { FC } from 'react'

import Banner from 'components/Banner'

import speed from 'sources/images/speedBanner.jpg'
import thread from 'sources/images/threads/speed.png'
import styles from './styles.module.scss'

const Speed: FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <Banner
        imgUrl={speed}
        title={'Высокая скорость передвижения'}
        text={`Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч.`}
        isOrange={false}
      />
      <img src={thread} className={styles.thread} alt="thread" />
    </div>
  )
}

export default Speed
