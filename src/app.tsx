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
  const [userInfo, setUserInfo] = useState(Object);
  const [chatUser, setChatUser] = useState(Object);
  const navigate = useNavigate();
  const logOut = () => {
    authService //
      .logOut();
    realTimeDataBase.updateUserInfo(uid, undefined, false);
    setUid('');
    navigate('/');
  };
  console.log(userInfo);
  console.log(uid);
  const openModal = () => {
    setVisibleLoginModal(true);
  };
  const closeModal = () => {
    setVisibleLoginModal(false);
  };
  const openUser = () => {
    setVisibleUserStatus(!visibleUserStatus);
  };
  const openChatRoom = (data: { [key: string]: string }) => {
    setVisibleChatRoom(true);
    setChatUser(data);
    realTimeDataBase.setChat(
      userInfo.email,
      data.email,
      `${userInfo.email}님이 방에입장했습니다.`,
    );
  };

  useEffect(() => {
    authService //
      .getUserInfo(setUid);
  }, [authService]);

  useEffect(() => {
    if (uid) {
      realTimeDataBase.getLoginUser(uid, setUserInfo);
    } else {
      setUserInfo(null);
    }
  }, [uid]);

  return (
    <>
      <NavBar
        openModal={openModal}
        openUser={openUser}
        uid={uid}
        logOut={logOut}
        userInfo={userInfo}
      />
      {visibleUserStatus && (
        <UserList openChatRoom={openChatRoom} userInfo={userInfo} />
      )}
      {visibleLoginModal && (
        <Modal
          authService={authService}
          closeModal={closeModal}
          fireStore={fireStore}
        />
      )}
      {visibleChatRoom && (
        <ChatRoom
          chatUser={chatUser}
          userInfo={userInfo}
          realTimeDataBase={realTimeDataBase}
          setVisibleChatRoom={setVisibleChatRoom}
        />
      )}
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
