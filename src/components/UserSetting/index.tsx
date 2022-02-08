import React from 'react';
import style from './usersetting.module.css';
import defaultImg from '../../assets/image/defaultimg.jpg';
import cameraImg from '../../assets/image/cameraIcon.jpg';

const UserSetting = () => {
  return (
    <div className={style.UserInfo}>
      <img src={defaultImg} alt='userImage' className={style.img} />
      <input
        type='file'
        accept='image/*'
        id='upload'
        className={style.submit}
      />
      <label htmlFor='upload'>
        <img src={cameraImg} alt='imgbutton' className={style.fakeBtn} />
      </label>
      <div>
        <h2 className={style.email}>donggun130@naver.com</h2>
        <p className={style.nickName}>donggun</p>
      </div>
    </div>
  );
};

export default UserSetting;
