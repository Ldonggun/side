import React from 'react';
import style from './user.module.css';
import defaultImg from '../../assets/image/defaultimg.jpg';
interface PropUser {
  data: { [key: string]: string };
  openChatRoom(data: { [key: string]: string }): void;
}
const User = ({ data, openChatRoom }: PropUser) => {
  const enterChatRoom = () => {
    openChatRoom(data);
  };
  return (
    <div className={style.user} onClick={enterChatRoom}>
      <img
        src={data.url ? data.url : defaultImg}
        alt='userImage'
        className={style.userImg}
      />
      <p className={style.userId}>{data.email}</p>
      <div className={data.status ? style.userOn : style.userOff} />
    </div>
  );
};

export default User;
