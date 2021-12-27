import React from 'react'

import imgSrc1 from 'sources/images/description-1.png'
import imgSrc2 from 'sources/images/description-2.png'
import List from 'components/List'

// style
import styles from './styles.module.scss'
import { descriptionList } from 'utils/lists'

const QuestionList: React.FC = () => {
  return (
    <ul className={styles.questionsList}>
    <li>
      <h4 className={styles.question}>На него нужны права категории M?</h4>
      <div className={styles.orangeLine}></div>
      <p className={styles.answer}>
        Продуманный угол рассеивания света позволяет сохранять хорошую видимость, не ослепляя
        других участников движения.
      </p>
    </li>

    <li>
      <h4 className={styles.question}>У меня вес 135 кг, выдержит ли этот самокат?</h4>
      <div className={styles.orangeLine}></div>
      <p className={styles.answer}>
        Самокат определенно выдержит и будет ехать, но не с максимальной скоростью.
      </p>
    </li>

    <li>
      <h4 className={styles.question}>Есть ли влагозащита?</h4>
      <div className={styles.orangeLine}></div>
      <p className={styles.answer}>
        Электросамокат имеет степень защиты IP54. Он защищен от попадания пыли и брызг, падающих в
        любом направлении. Погружение в воду может привести к поломке.
      </p>
    </li>

    <li>
      <h4 className={styles.question}>Это версия для Китая или Европы?</h4>
      <div className={styles.orangeLine}></div>
      <p className={styles.answer}>
        Это Европейская версия, со всеми обновлениями и евро-вилкой.
      </p>
    </li>
  </ul>
  )
}

export default QuestionList
