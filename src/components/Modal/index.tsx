import React, { useRef, useState } from 'react';
import style from './modal.module.css';
import googleLogin from '../../assets/image/btn_google_signin_light_normal_web.png';
//type
import { FireStoreType } from '../../shared/firestore';
import { AuthServiceType } from '../../shared/login';
interface PropModal {
  closeModal(): void;
  authService: AuthServiceType;
  fireStore: FireStoreType;
}

const Modal = ({ authService, closeModal, fireStore }: PropModal) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passWordRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(true);
  const [isEmailLogin, setIsEmailLogin] = useState(false);

  const signUpWithEmail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    authService //
      .signUpEmail(
        emailRef.current?.value,
        passWordRef.current?.value,
        setVisible,
      );
  };

  const signInWithEmail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    authService //
      .signInEmail(
        emailRef.current?.value,
        passWordRef.current?.value,
        setIsEmailLogin,
        setVisible,
        closeModal,
      );
  };

  const handleSignUpClick = () => {
    setVisible(false);
  };
  const handleSignInClick = () => {
    setVisible(false);
    setIsEmailLogin(true);
  };
  const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };
  return (
    <>
      <div className={style.outer} onClick={onClose}>
        <div className={style.inner}>
          {visible ? (
            <section className={style.buttonSection}>
              <img src={googleLogin} alt='googleImg' />
              <div className={style.emailLogin}>
                <p>
                  이메일 <span onClick={handleSignUpClick}>회원가입 /</span>
                  <span onClick={handleSignInClick}> 로그인</span>
                </p>
              </div>
            </section>
          ) : (
            <section className={style.buttonSection}>
              <form className={style.form}>
                <input
                  type='email'
                  name='id'
                  placeholder='이메일'
                  ref={emailRef}
                />
                <input
                  type='password'
                  name='pw'
                  placeholder='패스워드'
                  ref={passWordRef}
                />
                {isEmailLogin ? (
                  <button onClick={signInWithEmail}>로그인</button>
                ) : (
                  <button onClick={signUpWithEmail}>회원가입</button>
                )}
              </form>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
