import React, { useState } from 'react';
import style from './setting.module.css';
//components
import { UserSetting } from '../../components';
const Setting = ({ upload, fireStore, userInfo, uid }: any) => {
  const uploadImage = async (file: string) => {
    const uploaded = await upload.imageUpload(file);
    fireStore.addUserImage(uid, uploaded.url);
  };

  return (
    <>
      <UserSetting upload={uploadImage} userInfo={userInfo} />
    </>
  );
};

export default Setting;
