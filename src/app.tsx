import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
//components
import { Modal, NavBar, UserList } from './components/index';
//page
import { Home, Setting } from './pages/index';
function App({ authService, dataBase, fireStore, upload }: any) {
  const [visibleLoginModal, setVisibleLoginModal] = useState(false);
  const [visibleUserStatus, setVisibleUserStatus] = useState(false);
  const [uid, setUid] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const navigate = useNavigate();
  const logOut = () => {
    authService //
      .logOut();
    navigate('/');
  };
  const openModal = () => {
    setVisibleLoginModal(true);
  };
  const openUser = () => {
    setVisibleUserStatus(!visibleUserStatus);
  };

  useEffect(() => {
    authService //
      .getUserInfo(setIsLogin, setUid);
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
        <Modal
          authService={authService}
          closeModal={setVisibleLoginModal}
          fireStore={fireStore}
        />
      )}
      <div className={style.wrap}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/setting'
            element={
              <Setting upload={upload} fireStore={fireStore} uid={uid} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
