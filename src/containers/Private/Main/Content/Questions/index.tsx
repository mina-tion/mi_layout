import React, { useState, useEffect } from 'react'

import Button from 'components/Button'
import QuestionList from './QuestionList'

import gradient from 'sources/images/gradients/questions.png'
import gradient2 from 'sources/images/gradients/questions2.png'
import thread from 'sources/images/threads/questions.png'

// style
import styles from './styles.module.scss'

const Questions: React.FC = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  const onResize = () => {
    setWidth(document.documentElement.clientWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <>
    <section className={styles.questions}>
      <img src={width>=960 ? gradient: gradient2} className={styles.gradient} alt="gradient" />
      <img src={thread} className={styles.thread} alt="line" />

      <div className={styles.description}>
        <div className={styles.title}>Часто задаваемые вопросы</div>
        <p className={styles.text}>
          Все ваши часто задаваемые вопросы о электросамокате Mi Scooter Pro 2.
        </p>

        <p className={styles.text}>
          Если у вас есть собственный вопрос - задайте его через форму обратной связи.
        </p>
        <Button text="Задать вопрос" />
      </div>

      <QuestionList />
    </section>
    </>
    
  )
}

export default Questions
