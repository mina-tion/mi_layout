import React from 'react'
import { useStore } from 'stores'

import Button from 'components/Button'
import ThemeSwitcher from 'components/ThemeSwitcher'

import { setList } from 'utils/lists'

import darkBike from 'sources/images/light-footer-bike.png'
import lightBike from 'sources/images/dark-footer-bike.png'
import gradient from 'sources/images/gradients/setCard.png'
import thread from 'sources/images/threads/set.png'

// style
import styles from './styles.module.scss'
import { useObserver } from 'mobx-react'

const Set: React.FC = () => {
  const { themeStore } = useStore()

  return useObserver(() => (
    <section className={styles.set}>
      <div className={styles.description}>
        <div>
          <h2 className={styles.title}>Mi Electric Scooter Pro 2</h2>
          <p className={styles.price}>54 990 ₽</p>
          <ThemeSwitcher />
        </div>
        <img src={themeStore.darkTheme ? lightBike : darkBike} alt="bike" className={styles.bike} />
        <Button text="Купить" isOrange={true}/>
      </div>
      <div className={styles.setContainer}>
        <h4 className={styles.setTitle}>Комплект поставки</h4>
        <ul className={styles.setList}>
          {setList.map((value: any) => {
            return <li key={value.id}>{value.text}</li>
          })}
        </ul>
      </div>
{/*       <img src={thread} alt="thread" className={styles.thread}/>
 */}      <img src={gradient} alt="gradient" className={styles.gradient}/>
    </section>
  ))
}

export default Set
