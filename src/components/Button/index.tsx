import React, { FC } from 'react'

// style
import styles from './styles.module.scss'

interface Props {
  text: string
}

const Button: FC<Props> = ({ text }) => {
  return <a href='' className={styles.button}>{text}</a>
}

export default Button
