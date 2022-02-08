import React from 'react';
import style from './setting.module.css';
//components
import { UserSetting } from '../../components';
const Setting = ({ upload }: any) => {
  console.log(upload);
  const uploadImage = (file: string) => {
    upload.imageUpload(file);
  };
  return (
    <>
      <UserSetting upload={uploadImage} />
    </>
  );
};

export default Setting;
