import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImg from '../../../Assets/image/logo.svg';
import cls from './Logo.module.scss';

const Logo = (props) => {
  return (
    <NavLink to="/" className={cls.logo}>
      <img className={cls.img} src={LogoImg} alt="logo" />
      <span className={cls.name}>
        <span>Security</span>
        <span>Forum</span>
      </span>
    </NavLink>
  );
};

export default Logo;
