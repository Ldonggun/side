import React from 'react';
import style from './chat.module.css';
import defaultImg from '../../assets/image/defaultimg.jpg';

interface PropChat {
  message: { [key: string]: string };
  chatUser: {
    email: string;
    url: string;
    status: boolean;
  };
}
const Chat = ({ message, chatUser }: PropChat) => {
  return (
    <>
      {message?.sender === chatUser.email ? (
        <div className={style.otherContainer}>
          <img className={style.img} src={chatUser.url} alt='상대방' />
          <p className={style.oterhMessage}>{message?.text}</p>
        </div>
      ) : (
        <div className={style.container}>
          <p className={style.message}>{message?.text}</p>
        </div>
      )}
    </>
  );
};

export default Chat;
