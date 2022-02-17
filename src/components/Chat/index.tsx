import React from 'react';
import style from './chat.module.css';
import defaultImg from '../../assets/image/defaultimg.jpg';
const Chat = () => {
  return (
    <div className={style.container}>
      <img className={style.img} src={defaultImg} alt='상대방' />
      <p className={style.message}>message</p>
    </div>
  );
};

export default Chat;
