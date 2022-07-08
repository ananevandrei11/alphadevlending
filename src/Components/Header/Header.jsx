import React, { useRef, useEffect, useState } from 'react';
import CustomButton from '../Common/Button/Button';
import Logo from '../Common/Logo/Logo';
import CustomLink from '../Common/CustomLink/CustomLink';
import cls from './Header.module.scss';

const Header = ({ linksHeader }) => {
  let [modeMenu, setModeMenu] = useState(false);

  // SOURCE CODE (CLICK TO MENU OUT): https://qna.habr.com/q/923739
  const root = useRef();
  const btnMenuOpen = useRef();
  useEffect(() => {
    const onClick = (e) => {
      if (
        !root.current.contains(e.target) &&
        !btnMenuOpen.current.contains(e.target)
      ) {
        setModeMenu(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [modeMenu]);

  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.wrapper}>
          <Logo />
          <button
            ref={btnMenuOpen}
            className={cls.btn_menu}
            onClick={() => setModeMenu(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <nav
            ref={root}
            className={[cls.nav, modeMenu ? cls.nav_open : ''].join(' ')}
          >
            <button className={cls.btn_menu} onClick={() => setModeMenu(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <ul className={cls.list_nav}>
              {linksHeader.map((link) => (
                <CustomLink link={link} key={link.id} />
              ))}
            </ul>
            <CustomButton classAdd={cls.btn_registr_sm} name="регистрация" />
          </nav>
          <CustomButton classAdd={cls.btn_registr_lg} name="регистрация" />
        </div>
      </div>
    </header>
  );
};

export default Header;
