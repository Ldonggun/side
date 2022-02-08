import React from 'react';
import style from './usersetting.module.css';
import defaultImg from '../../assets/image/defaultimg.jpg';
import cameraImg from '../../assets/image/cameraIcon.jpg';

const UserSetting = ({ upload, imgUrl }: any) => {
  const addImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files && e.target.files[0];
    upload(imageFile);
  };
  return (
    <div className={style.UserInfo}>
      <img
        src={imgUrl ? imgUrl : defaultImg}
        alt='userImage'
        className={style.img}
      />
      <input
        type='file'
        accept='image/*'
        id='upload'
        className={style.submit}
        onChange={addImg}
      />
      <label htmlFor='upload'>
        <img src={cameraImg} alt='imgBtn' className={style.fakeBtn} />
      </label>
      <div>
        <h2 className={style.email}>donggun130@naver.com</h2>
      </div>
    </div>
  );
};

export default UserSetting;
