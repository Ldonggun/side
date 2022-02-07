import React, { useEffect } from 'react';
import style from './app.module.css';
//components
import { Modal, NavBar } from './components/index';
//page
import { Home } from './pages/index';
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
    <div className={style.wrap}>
      <NavBar />
      <Home />
      {/* <button onClick={logOut}>로그아웃</button> */}
      {/* <Modal authService={authService} /> */}
    </div>
  );
}

export default App;
