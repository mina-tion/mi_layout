import React, { FC } from 'react'

import Header from './Header'
import Footer from './Footer'

import styles from './styles.module.scss'
import Content from './Content'

const Main: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default Main
