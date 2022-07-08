import React from 'react';
import Logo from '../Common/Logo/Logo';
import CustomLink from '../Common/CustomLink/CustomLink';
import SocialLink from '../Common/SocialLink/SocialLink';
import cls from './Footer.module.scss';

const Footer = ({ linksContact, linksNav, linksSocialNetworks }) => {
  return (
    <footer className={cls.footer}>
      <div className="container">
        <div className={cls.wrapper}>
          <Logo classAdd={cls.logo_footer} />
          <ul className={cls.list_contact}>
            {linksContact.map((link) => (
              <CustomLink link={link} key={link.id} />
            ))}
          </ul>
          <ul className={cls.list_nav}>
            {linksNav.map((link) => (
              <CustomLink link={link} key={link.id} />
            ))}
          </ul>
          <ul className={cls.list_social}>
            {linksSocialNetworks.map((link) => (
              <SocialLink link={link} key={link.id} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
