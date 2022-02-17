import React from 'react';
import style from './chatinput.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const ChatInput = () => {
  return (
    <form className={style.chatForm}>
      <div className={style.container}>
        <input placeholder='send message' type='text' />
        <FontAwesomeIcon icon={faPaperPlane} className={style.btn} />
      </div>
    </form>
  );
};

export default ChatInput;
