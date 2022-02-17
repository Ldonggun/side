import React from 'react';
import style from './chatroom.module.css';
//components
import { ChatLog, ChatInput } from '../index';
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
      <section className={style.userInfo}>
        <img src={chatUser?.url} alt='userImg' />
        <p>{chatUser?.email}</p>
        <p>{chatUser?.status ? '온라인' : '오프라인'}</p>
      </section>
      <section className={style.chatLog}>
        <ChatLog />
      </section>
      <section className={style.chatInput}>
        <ChatInput />
      </section>
    </div>
  );
};

export default ChatRoom;
