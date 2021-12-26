import React from 'react'

import imgSrc1 from 'sources/images/description-1.png'
import imgSrc2 from 'sources/images/description-2.png'
import List from 'components/List'

// style
import styles from './styles.module.scss'
import { descriptionList } from 'utils/const'

const Questions: React.FC = () => {
  return (
    <section className={styles.questions}>
       {/*  <img src={ellipseSrc} className={styles.ellipse} alt="ellipse" />

        <img src={lineSrc} className={styles.lineIcon} alt="line" /> */}

        <div className={styles.description}>
          <div className={styles.title}>Часто задаваемые вопросы</div>
          <p className={styles.text}>
            Все ваши часто задаваемые вопросы о электросамокате Mi Scooter Pro 2.
          </p>
          <p className={styles.text}>
            Если у вас есть собственный вопрос - задайте его через форму обратной связи.
          </p>
  
        </div>

  {/*       <QuestionsList /> */}
      </section>

   /*    <Preview /> */
  )
}

export default Questions
