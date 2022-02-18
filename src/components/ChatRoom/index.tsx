import React, { useEffect, useState } from 'react';
import style from './chatroom.module.css';
//components
import { ChatLog, ChatInput } from '../index';
//type
import { RealTimeDataBaseType } from '../../shared/realtimedatabase';
interface PropsChatRoom {
  chatUser: {
    email: string;
    url: string;
    status: boolean;
  };
  userInfo: {
    email: string;
    url: string;
    status: boolean;
  };
  realTimeDataBase: RealTimeDataBaseType;
}

const ChatRoom = ({ chatUser, userInfo, realTimeDataBase }: PropsChatRoom) => {
  const [message, setMessage] = useState<{ [key: string]: string }>();
  const sendMessage = (msg: string) => {
    realTimeDataBase.setChat(userInfo.email, chatUser.email, msg);
  };

  useEffect(() => {
    realTimeDataBase.getChatLog(userInfo.email, chatUser.email, setMessage);
  }, [realTimeDataBase]);

  return (
    <div className={style.container}>
      <section className={style.userInfo}>
        <img src={chatUser?.url} alt='userImg' />
        <p>{chatUser?.email}</p>
        <p>{chatUser?.status ? '온라인' : '오프라인'}</p>
      </section>

      {message && <ChatLog message={message} chatUser={chatUser} />}

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;
