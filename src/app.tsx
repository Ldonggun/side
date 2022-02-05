import React, { useEffect } from 'react';
import './app.css';
//components
import { Modal } from './components/index';

function App({ authService }: any) {
  useEffect(() => {
    authService //
      .getUserInfo();
  });
  const logOut = () => {
    authService //
      .logOut();
  };
  return (
    <>
      <h1>Hello :)</h1>
      <button onClick={logOut}>로그아웃</button>
      {/* <Modal authService={authService} /> */}
    </>
  );
}

export default App;
