import React from 'react';
import style from './user.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import defaultImg from '../../assets/image/defaultimg.jpg';
const User = () => {
  return (
    <div className={style.user}>
      <img src={defaultImg} alt='userImage' className={style.userImg} />
      <p className={style.userId}>donggun130@naver.com</p>
      <div className={style.userStatus} />
    </div>
  );
};

export default User;
