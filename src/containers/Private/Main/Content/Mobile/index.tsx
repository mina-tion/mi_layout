
import React from 'react';
/* 
import { ReactComponent as AppleIcon } from 'sources/icons/apple.svg';
import { ReactComponent as GoogleIcon } from 'sources/icons/google.svg'; */

/* import topEllipseSrc from 'sources/images/ellipses/top-mobile-app.png';
 */
import phone from 'sources/images/dark-mobile.png'
import appStore from 'sources/images/icons/appStore.png'
import playMarket from 'sources/images/icons/playMarket.png'
import gradient from 'sources/images/gradients/mobile.png'
import gradient2 from 'sources/images/gradients/mobile2.png'
import thread from 'sources/images/threads/mobile.png'

import styles from './styles.module.scss';

const Mobile: React.FC = () => {
  return (
    <section className={styles.mobileApp}>
      <div className={styles.description}>
        <h4 className={styles.title}>Мобильное приложение Mi Home</h4>
        <p className={styles.text}>
          Подключите самокат к мобильному приложению Mi Home и используйте его для блокировки и
          разблокировки самоката, а так же просмотра основных данных: пробег, скорость, уровень
          заряда аккумулятора.
        </p>
        
        <div className={styles.iconsContainer} >
          <img src={appStore} alt='app store' className={styles.icon}/>
          <img src={playMarket} alt='play market' />
        </div>
      </div>
      
      <img src={phone} alt='mobile phone' className={styles.phone} />
      <img src={gradient} className={styles.gradient} alt="gradient" />
      <img src={thread} className={styles.thread} alt="line" />
      <img src={gradient2} className={styles.gradient2} alt="gradient" />

    </section>
  );
};

export default Mobile;