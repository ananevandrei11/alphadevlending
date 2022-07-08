import React from 'react';
import { ReactSVG } from 'react-svg';
import cls from './SocialLink.module.scss';

const SocialLinks = (props) => {
  return (
    <li className={cls.item}>
      <a className={cls.link} href={props.link.href} target="_blank">
        <ReactSVG src={props.link.icon} />
      </a>
    </li>
  );
};

export default SocialLinks;
