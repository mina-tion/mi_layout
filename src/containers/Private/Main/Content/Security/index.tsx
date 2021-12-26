import React from 'react'

import cn from 'classnames'

import imgSrc1 from 'sources/images/description-1.png'
import imgSrc2 from 'sources/images/description-2.png'
import List from 'components/List'

// style
import styles from './styles.module.scss'
import { securityList } from 'utils/const'

const Security: React.FC = () => {
  return (
    <section className={styles.security}>
      <h2 className={styles.title}>Заботится о вашей безопасности</h2>

      <List list={securityList} />

      <div className={styles.imagesWrapper}>
        <img src={imgSrc1} alt="power1" className={styles.bigImg} />
        <img src={imgSrc2} alt="power2" className={styles.smallImg} />
      </div>
    </section>
  )
}

export default Security
