import React, { FC } from 'react'
import cn from 'classnames'
// style
import styles from './styles.module.scss'

interface Props {
  text: string
  isOrange?: boolean
}

const Button: FC<Props> = ({ text, isOrange }) => {
  return (
    <div className={cn(styles.button, isOrange && styles.orange)}>
      <a href="/" className={styles.text}>
        {text}
      </a>
    </div>
  )
}

export default Button
