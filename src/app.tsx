import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
//components
import { Modal, NavBar, UserList, ChatRoom } from './components/index';
//page
import { Home, Setting } from './pages/index';
//type
import { FireStoreType } from './shared/firestore';
import { AuthServiceType } from './shared/login';
import { RealTimeDataBaseType } from './shared/realtimedatabase';
import { UploadType } from './shared/upload';

export interface AppProps {
  authService: AuthServiceType;
  realTimeDataBase: RealTimeDataBaseType;
  fireStore: FireStoreType;
  upload: UploadType;
}
export type userList = {
  email: string;
  url: string;
};
function App({ authService, realTimeDataBase, fireStore, upload }: AppProps) {
  const [visibleLoginModal, setVisibleLoginModal] = useState(false);
  const [visibleUserStatus, setVisibleUserStatus] = useState(false);
  const [visibleChatRoom, setVisibleChatRoom] = useState(false);
  const [uid, setUid] = useState(String);
  const [userInfo, setUserInfo] = useState();
  const [chatUser, setChatUser] = useState(Object);
  const [isLogin, setIsLogin] = useState(Boolean);
  const navigate = useNavigate();

  const logOut = () => {
    authService //
      .logOut();
    realTimeDataBase.updateUserInfo(uid, undefined, false);
    navigate('/');
  };
  const openModal = () => {
    setVisibleLoginModal(true);
  };
  const closeModal = () => {
    setVisibleLoginModal(false);
  };
  const openUser = () => {
    setVisibleUserStatus(!visibleUserStatus);
  };
  const openChatRoom = (data: {
    email: string;
    url: string;
    status: boolean;
  }) => {
    setVisibleChatRoom(true);
    setChatUser(data);
  };

  useEffect(() => {
    authService //
      .getUserInfo(setIsLogin, setUid);
  }, [authService]);

  useEffect(() => {
    if (uid) {
      realTimeDataBase.getLoginUser(uid, setUserInfo);
    }
  }, [uid, fireStore, realTimeDataBase]);

  return (
    <>
      <NavBar
        openModal={openModal}
        openUser={openUser}
        isLogin={isLogin}
        logOut={logOut}
      />
      {visibleUserStatus && <UserList openChatRoom={openChatRoom} />}
      {visibleLoginModal && (
        <Modal
          authService={authService}
          closeModal={closeModal}
          fireStore={fireStore}
        />
      )}
      {openChatRoom}
      {visibleChatRoom && <ChatRoom chatUser={chatUser} />}
      <div className={style.wrap}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/setting'
            element={
              <Setting
                upload={upload}
                realTimeDataBase={realTimeDataBase}
                uid={uid}
                userInfo={userInfo}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
