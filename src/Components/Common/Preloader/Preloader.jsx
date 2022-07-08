import React from "react";
import Spin from "../../../Assets/image/Spin.svg";
import cls from './Preloader.module.scss';

let Preloder = (props) => {
  return (
    <div className={cls.preloader}>
      <img src={Spin} className={cls.preloader__img} alt="preloader"/>
    </div>
  )
}

export default Preloder