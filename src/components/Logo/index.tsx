import React, { FC } from 'react'

import orange from 'sources/images/oLogo.svg'
import white from 'sources/images/wLogo.svg'

// style
import styles from './styles.module.scss'

interface Props {
  isOrange?: boolean
}

const Logo: FC<Props> = ({ isOrange }) => {
  return <img className={styles.icon} src={isOrange ? orange : white} alt="logotype" />
}

export default Logo
