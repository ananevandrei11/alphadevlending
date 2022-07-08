import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import cls from './CustomLink.module.scss';

const CustomLink = ({ ...props }) => {
  let location = useLocation();

  return (
    <li className={cls.item}>
      {props.link.other ? (
        <a href={props.link.href} className={[cls.link, 'text'].join(' ')}>
          {props.link.name}
        </a>
      ) : (
        <NavHashLink
          smooth
          to={props.link.href}
          className={[cls.link, 'text', (location.hash === props.link.href ? cls.active : '')].join(' ')}
        >
          {props.link.name}
        </NavHashLink>
      )}
    </li>
  );
};

export default CustomLink;
