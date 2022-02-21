import React, { useState } from 'react';
import style from './setting.module.css';
//components
import { UserSetting } from '../../components';
//type
import { UploadType } from '../../shared/upload';
import { RealTimeDataBaseType } from '../../shared/realtimedatabase';
interface SettingProps {
  upload: UploadType;
  realTimeDataBase: RealTimeDataBaseType;
  userInfo: undefined | { email: string; url: string; uid: string };
  uid: string;
}

const Setting = ({ upload, realTimeDataBase, userInfo, uid }: SettingProps) => {
  const uploadImage = async (file: File | null) => {
    const uploaded = await upload.imageUpload(file);
    const url = uploaded.url;
    realTimeDataBase.updateUserInfo(uid, url);
  };

  return (
    <>
      <UserSetting upload={uploadImage} userInfo={userInfo} />
    </>
  );
};

export default Setting;
