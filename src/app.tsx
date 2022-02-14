import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
//components
import { Modal, NavBar, UserList } from './components/index';
//page
import { Home, Setting } from './pages/index';
//type
import { FireStoreType } from './shared/firestore';
import { AuthServiceType } from './shared/login';
import { RealTimeDataBaseType } from './shared/realtimedatabase';
import { UploadType } from './shared/upload';
import { DocumentData } from 'firebase/firestore';

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
  const [userList, setUserList] = useState<DocumentData | userList[]>([
    { url: '', email: '' },
  ]);
  const [uid, setUid] = useState(String);
  const [userInfo, setUserInfo] = useState({ email: '', url: '' });
  const [isLogin, setIsLogin] = useState(Boolean);
  const navigate = useNavigate();

  const logOut = () => {
    authService //
      .logOut();
    if (uid) realTimeDataBase.userStatus(uid, 'logout');
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

  useEffect(() => {
    authService //
      .getUserInfo(setIsLogin, setUid);
    realTimeDataBase //
      .getLoginUser();
  });

  useEffect(() => {
    if (uid) {
      fireStore.getUserInfo(uid, setUserInfo);
      realTimeDataBase.userStatus(uid, 'login');
    }
    fireStore.getAllUserInfo(setUserList);
  }, [uid, fireStore, realTimeDataBase]);

  return (
    <>
      <NavBar
        openModal={openModal}
        openUser={openUser}
        isLogin={isLogin}
        logOut={logOut}
      />
      {visibleUserStatus && <UserList userList={userList} />}
      {visibleLoginModal && (
        <Modal
          authService={authService}
          closeModal={closeModal}
          fireStore={fireStore}
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
                fireStore={fireStore}
                uid={uid}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
