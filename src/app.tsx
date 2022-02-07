import React, { useEffect, useState } from 'react';
import style from './app.module.css';
//components
import { Modal, NavBar, UserList } from './components/index';
//page
import { Home } from './pages/index';
function App({ authService }: any) {
  const [visibleLoginModal, setVisibleLoginModal] = useState(false);
  const [visibleUserStatus, setVisibleUserStatus] = useState(false);
  const [isLogin, setIsLogin] = useState(null);
  const logOut = () => {
    authService //
      .logOut();
  };
  const openModal = () => {
    setVisibleLoginModal(true);
  };
  const openUser = () => {
    setVisibleUserStatus(!visibleUserStatus);
  };

  useEffect(() => {
    authService //
      .getUserInfo(setIsLogin);
  });

  return (
    <>
      <NavBar
        openModal={openModal}
        openUser={openUser}
        isLogin={isLogin}
        logOut={logOut}
      />
      {visibleUserStatus && <UserList />}
      {visibleLoginModal && (
        <Modal authService={authService} closeModal={setVisibleLoginModal} />
      )}
      <div className={style.wrap}>
        <Home />
      </div>
    </>
  );
}

export default App;
