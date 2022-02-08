import React, { useState } from 'react';
import style from './setting.module.css';
//components
import { UserSetting } from '../../components';
const Setting = ({ upload, fireStore, userInfo, setUserInfo, uid }: any) => {
  const uploadImage = async (file: string) => {
    const uploaded = await upload.imageUpload(file, setUserInfo);
    setUserInfo({ ...userInfo, url: uploaded.url });
    fireStore.addUserImage(uid, uploaded.url);
  };

  return (
    <>
      <UserSetting
        upload={uploadImage}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
    </>
  );
};

export default Setting;
