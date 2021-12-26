import React from 'react'

import Intro from './Intro'
import Description from './Description'
/* import Banner from 'components/Banner'
 */
// style
import styles from './styles.module.scss'
import Design from './Design'
import Mobile from './Mobile'

const Content: React.FC = () => {
  return (
    <main className={styles.content}>
      <Intro />
      <Description />
      <Mobile />
    </main>
  )
}

export default Content
