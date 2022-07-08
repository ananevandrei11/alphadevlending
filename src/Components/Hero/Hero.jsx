import React from 'react';
import CustomButton from '../Common/Button/Button';
import cls from './Hero.module.scss';

const Hero = (props) => {
  return (
    <section id="about" className={cls.hero}>
      <div className="container">
        <h1 className={cls.title}>
          <span>Форум Microsoft</span>
          <span>«Finance industry trust in AI and IT-Security»</span>
        </h1>
        <p className={cls.text}>
          Масштабная кибератака и устаревшее оборудование может привести
          к потере клиентов, ухудшить отношения с партнёрами и учредителями,
          а невыполнение требований законодательства может привести
          к существенным штрафам и даже к блокировке ресурсов
        </p>
        <p className={[cls.subtext, 'text'].join(' ')}>Узнайте как этого избежать, регистрируйтесь на наш форум</p>
        <CustomButton name="регистрация" />
      </div>
    </section>
  );
};

export default Hero;
