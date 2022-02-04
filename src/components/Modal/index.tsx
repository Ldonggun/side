import React, { useRef, useState } from 'react';
import style from './modal.module.css';
import googleLogin from '../../assets/image/btn_google_signin_light_normal_web.png';

const Modal = ({ authService }: any) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passWordRef = useRef<HTMLInputElement>(null);
  const [visible, setVisible] = useState(true);

  const signUpWithEmail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    authService //
      .signUpWithEmail(emailRef.current?.value, passWordRef.current?.value)
      .then((result: string) => {
        result && window.alert('회원가입 완료');
        setVisible(true);
      })
      .catch((error: { message: string }) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleSignUpClick = () => {
    setVisible(false);
  };
  const handleSignInClick = () => {
    setVisible(false);
  };

  return (
    <>
      <div className={style.outer}>
        <div className={style.inner}>
          {visible ? (
            <section className={style.buttonSection}>
              <img src={googleLogin} />
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
                <button onClick={signUpWithEmail}>회원가입</button>
              </form>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

const Email = () => {
  return {};
};

export default Modal;
