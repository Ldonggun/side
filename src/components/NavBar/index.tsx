import React from 'react';
import style from './nabbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ openModal }: any) => {
  return (
    <nav className={style.navBar}>
      <ul className={style.category}>
        <li className={style.element}>
          <FontAwesomeIcon icon={faHome} size='2x' />
          <p>홈</p>
        </li>
        <li className={style.element} onClick={openModal}>
          <FontAwesomeIcon icon={faSignInAlt} size='2x' />
          <p>로그인</p>
        </li>
        <li className={style.element}>
          <FontAwesomeIcon icon={faUser} size='2x' />
          <p>유저</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
