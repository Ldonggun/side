import React from 'react';
import style from './user.module.css';
import defaultImg from '../../assets/image/defaultimg.jpg';
interface UserType {
  data: { email: string; url: string; status: boolean };
  openChatRoom(data: { email: string; url: string; status: boolean }): void;
}
const User = ({ data, openChatRoom }: UserType) => {
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
