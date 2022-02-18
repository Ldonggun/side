import React, { useEffect, useState } from 'react';
import style from './chatroom.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
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
  setVisibleChatRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatRoom = ({
  chatUser,
  userInfo,
  realTimeDataBase,
  setVisibleChatRoom,
}: PropsChatRoom) => {
  const [message, setMessage] = useState<{ [key: string]: string }>();
  const sendMessage = (msg: string) => {
    realTimeDataBase.setChat(userInfo.email, chatUser.email, msg);
  };
  const closeChatRoom = () => {
    setVisibleChatRoom(false);
  };

  useEffect(() => {
    realTimeDataBase.getChatLog(userInfo.email, chatUser.email, setMessage);
    return () => {};
  }, [chatUser.email, realTimeDataBase, userInfo.email]);

  return (
    <div className={style.container}>
      <section className={style.userInfo}>
        <img src={chatUser?.url} alt='userImg' />
        <p>{chatUser?.email}</p>
        {/* <p>{chatUser?.status ? 'on' : 'off'}</p> */}
        <div className={style.btn} onClick={closeChatRoom}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      </section>
      {message && <ChatLog message={message} chatUser={chatUser} />}
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;
