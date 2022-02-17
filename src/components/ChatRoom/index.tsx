import React from 'react';
import style from './chatroom.module.css';
//components
import { User } from '../index';
interface PropsChatRoom {
  chatUser: {
    email: string;
    url: string;
    status: boolean;
  };
}
const ChatRoom = ({ chatUser }: PropsChatRoom) => {
  console.log(chatUser);
  return (
    <div className={style.container}>
      <div className={style.userInfo}>
        <img src={chatUser?.url} alt='userImg' />
        <p>{chatUser?.email}</p>
        <p>{chatUser?.status ? '온라인' : '오프라인'}</p>
      </div>
      <p>chat room</p>
    </div>
  );
};

export default ChatRoom;
