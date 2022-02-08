import React, { useState } from 'react';
import style from './setting.module.css';
//components
import { UserSetting } from '../../components';
const Setting = ({ upload, fireStore, uid }: any) => {
  const [userImgUrl, setUserImgUrl] = useState();
  const uploadImage = async (file: string) => {
    const uploaded = await upload.imageUpload(file);
    setUserImgUrl(uploaded.url);
    fireStore.addUserImage(uid, uploaded.url);
  };

  return (
    <>
      <UserSetting upload={uploadImage} imgUrl={userImgUrl} />
    </>
  );
};

export default Setting;
