import React from 'react';
import style from './user.module.css';
import defaultImg from '../../assets/image/defaultimg.jpg';

const User = ({ data }: any) => {
  return (
    <div className={style.user}>
      <img
        src={data.url ? data.url : defaultImg}
        alt='userImage'
        className={style.userImg}
      />
      <p className={style.userId}>{data.email}</p>
      <div className={style.userStatus} />
    </div>
  );
};

export default User;
