import React from 'react'

import imgSrc1 from 'sources/images/description-1.png'
import imgSrc2 from 'sources/images/description-2.png'

// style
import styles from './styles.module.scss'

interface Props {
  title: string
  text: string
}

const ListItem: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.listItem}>
      <h4 className={styles.itemTitle}>{title}</h4>
      <div className={styles.line}></div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ListItem
