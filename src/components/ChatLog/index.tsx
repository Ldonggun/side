import React from 'react';
import style from './chatlog.module.css';
//component
import { Chat } from '../index';

interface PropChatLog {
  message: { [key: string]: string };
  chatUser: {
    email: string;
    url: string;
    status: boolean;
  };
}

const ChatLog = ({ message, chatUser }: PropChatLog) => {
  console.log(message);
  return (
    <div className={style.container}>
      {message &&
        Object.keys(message).map(key => {
          const value: {} = message[key];
          return <Chat message={value} key={key} chatUser={chatUser} />;
        })}
    </div>
  );
};

export default ChatLog;
