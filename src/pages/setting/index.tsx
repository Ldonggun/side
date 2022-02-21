import React from 'react';
//components
import { UserSetting } from '../../components';
//type
import { UploadType } from '../../shared/upload';
import { RealTimeDataBaseType } from '../../shared/realtimedatabase';
interface PropSetting {
  upload: UploadType;
  realTimeDataBase: RealTimeDataBaseType;
  userInfo: undefined | { email: string; url: string; uid: string };
  uid: string;
}

const Setting = ({ upload, realTimeDataBase, userInfo, uid }: PropSetting) => {
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
