import React, { useState } from 'react';
import style from './setting.module.css';
//components
import { UserSetting } from '../../components';
//type
import { UploadType } from '../../shared/upload';
import { FireStoreType } from '../../shared/firestore';
interface SettingProps {
  upload: UploadType;
  fireStore: FireStoreType;
  userInfo: { email: string; url: string };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      email: string;
      url: string;
    }>
  >;
  uid: string;
}

const Setting = ({
  upload,
  fireStore,
  userInfo,
  setUserInfo,
  uid,
}: SettingProps) => {
  const uploadImage = async (file: File | null) => {
    const uploaded = await upload.imageUpload(file);
    const url = uploaded.url;
    setUserInfo({ ...userInfo, url });
    fireStore.addUserImage(uid, url);
  };

  return (
    <>
      <UserSetting upload={uploadImage} userInfo={userInfo} />
    </>
  );
};

export default Setting;
