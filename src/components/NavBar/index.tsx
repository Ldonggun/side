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
//image
import defaultImg from '../../assets/image/defaultimg.jpg';
interface PropNavBar {
  openModal: () => void;
  openUser: () => void;
  uid: string;
  logOut: () => void;
  userInfo: { [key: string]: string };
}
const NavBar = ({ openModal, openUser, uid, logOut, userInfo }: PropNavBar) => {
  const navigate = useNavigate();
  const moveSetting = () => {
    if (uid) navigate('/setting');
    else window.alert('로그인이 필요합니다');
  };
  const moveHome = () => {
    navigate('/');
  };
  console.log(userInfo);
  return (
    <nav className={style.navBar}>
      <ul className={style.category}>
        <li className={style.element} onClick={moveSetting}>
          <img
            src={userInfo ? userInfo.url : defaultImg}
            className={style.img}
            alt='userimg'
          />
        </li>
        <li className={style.element} onClick={moveHome}>
          <FontAwesomeIcon icon={faHome} size='2x' />
          <p>홈</p>
        </li>
        <li className={style.element} onClick={uid ? logOut : openModal}>
          <FontAwesomeIcon icon={faSignInAlt} size='2x' />
          {uid ? <p>로그아웃</p> : <p>로그인</p>}
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
