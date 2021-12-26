import React from 'react'

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
