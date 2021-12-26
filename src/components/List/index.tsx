import React, { FC } from 'react'

import ListItem from 'components/ProsListItem'

// style
import styles from './styles.module.scss'

interface Props {
  list: any
}

const List: FC<Props> = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((item: any) => (
        <ListItem key={item.id} title={item.title} text={item.text} />
      ))}
    </div>
  )
}

export default List
