import React, { useEffect, useRef } from 'react';
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
  const divRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    divRef.current?.scrollIntoView();
  });

  return (
    <div className={style.container}>
      {message &&
        Object.keys(message).map(key => {
          const value: {} = message[key];
          return <Chat message={value} key={key} chatUser={chatUser} />;
        })}
      <div ref={divRef} />
    </div>
  );
};

export default ChatLog;
