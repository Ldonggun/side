import React from 'react';
import style from './nabbar.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faUser,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ openModal, openUser, isLogin, logOut }: any) => {
  const navigate = useNavigate();

  const moveSetting = () => {
    if (isLogin) navigate('/setting');
    else window.alert('로그인이 필요합니다');
  };
  const moveHome = () => {
    navigate('/');
  };
  return (
    <nav className={style.navBar}>
      <ul className={style.category}>
        <li className={style.element} onClick={moveHome}>
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
        <li className={style.element} onClick={moveSetting}>
          <FontAwesomeIcon icon={faCog} size='2x' />
          <p>설정</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
