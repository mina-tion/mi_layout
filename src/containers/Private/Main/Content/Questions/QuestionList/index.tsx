import React from 'react'

import { questionsList } from 'utils/lists'

// style
import styles from './styles.module.scss'

const QuestionList: React.FC = () => {
  return (
    <ul className={styles.questionsList}>
      {questionsList.map((question: any) => {
        return (
          <li key={question.id}>
            <h4 className={styles.question}>{question.title}</h4>
            <p className={styles.answer}>{question.text}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default QuestionList
