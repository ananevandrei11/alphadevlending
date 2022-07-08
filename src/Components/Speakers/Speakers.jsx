import React from 'react';
import Speaker from './Speaker';
import cls from './Speakers.module.scss';

const Speakers = (props) => {
  return (
    <section className={cls.speakers}>
      <div className="container">
        <h2 id="speakers" className={cls.title}>Спикеры нашего форума</h2>
        <div className={cls.list}>
          {props.speakers.map((item) => (
            <Speaker classAdd={cls.item} item={item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
