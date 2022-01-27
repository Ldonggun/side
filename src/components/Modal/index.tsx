import React from 'react';
import style from './modal.module.css';
const Modal = () => {
  return (
    <>
      <div className={style.outer}>
        <div className={style.inner}>
          <h1>Login</h1>
          <section className={style.buttonSection}>
            <button>이메일 로그인</button>
            <button>구글 로그인</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Modal;
