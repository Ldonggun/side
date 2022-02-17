import React from 'react';
import style from './chatlog.module.css';
//component
import { Chat } from '../index';
const ChatLog = () => {
  return (
    <div className={style.container}>
      <Chat />
      {/* <p>ChatLog</p> */}
    </div>
  );
};

export default ChatLog;
