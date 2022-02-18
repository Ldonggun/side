import React, { useRef } from 'react';
import style from './chatinput.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface PropChatInput {
  sendMessage(message: string): void;
}

const ChatInput = ({ sendMessage }: PropChatInput) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {
    if (inputRef.current?.value) {
      sendMessage(inputRef.current.value);
      inputRef.current.value = '';
    }
  };
  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    onSubmit();
  };

  return (
    <div className={style.container}>
      <input
        placeholder='send message'
        type='text'
        ref={inputRef}
        onKeyPress={pressEnter}
      />
      <div onClick={onSubmit} className={style.btn}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
};

export default ChatInput;
