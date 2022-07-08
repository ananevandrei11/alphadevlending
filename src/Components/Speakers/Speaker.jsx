import React from 'react';
import cls from './Speaker.module.scss';

const Speaker = (props) => {
  let speaker = props.item;
  return (
    <article className={[cls.speaker, props.classAdd].join(' ')}>
      <div className={cls.photo}>
        <img className={cls.img} src={speaker.photo_url} alt={speaker.name} />
      </div>
      <div className={cls.info}>
        <h3 className={cls.name}>{speaker.name}</h3>
        <span className={cls.separator}></span>
        <p className={[cls.text, 'text'].join(' ')}>{speaker.description}</p>
        <a className={[cls.link, 'text'].join(' ')}>Подробнее</a>
      </div>
    </article>
  );
};

export default Speaker;
