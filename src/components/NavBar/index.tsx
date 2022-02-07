import React from 'react';
import style from './nabbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ openModal, openUser, isLogin, logOut }: any) => {
  return (
    <nav className={style.navBar}>
      <ul className={style.category}>
        <li className={style.element}>
          <FontAwesomeIcon icon={faHome} size='2x' />
          <p>홈</p>
        </li>
        <li className={style.element} onClick={isLogin ? logOut : openModal}>
          <FontAwesomeIcon icon={faSignInAlt} size='2x' />
          {isLogin ? <p>로그아웃</p> : <p>로그인</p>}
        </li>
        <li className={style.element} onClick={openUser}>
          <FontAwesomeIcon icon={faUser} size='2x' />
          <p>유저</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
