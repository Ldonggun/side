import React, { useEffect, useState } from 'react';
import style from './app.module.css';
//components
import { Modal, NavBar, UserList } from './components/index';
//page
import { Home } from './pages/index';
function App({ authService }: any) {
  const [visibleLoginModal, setVisibleLoginModal] = useState(false);
  useEffect(() => {
    authService //
      .getUserInfo();
  });
  const logOut = () => {
    authService //
      .logOut();
  };
  const openModal = () => {
    setVisibleLoginModal(true);
  };
  return (
    <>
      <NavBar openModal={openModal} />
      <UserList />
      {visibleLoginModal && (
        <Modal authService={authService} closeModal={setVisibleLoginModal} />
      )}
      <div className={style.wrap}>
        <Home />
        {/* <button onClick={logOut}>로그아웃</button> */}
      </div>
    </>
  );
}

export default App;
