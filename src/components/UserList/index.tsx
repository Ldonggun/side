import React, { useEffect, useState } from 'react';
import style from './userlist.module.css';
//component
import { User } from '../index';
//class
import RealTimeDataBase from '../../shared/realtimedatabase';
interface PropUserList {
  openChatRoom(data: { [key: string]: string }): void;
  userInfo: { [key: string]: string };
}
const realTimeDataBase = new RealTimeDataBase();
const UserList = ({ openChatRoom, userInfo }: PropUserList) => {
  const [userList, setUserList] = useState(Object);
  useEffect(() => {
    realTimeDataBase.getUserList(setUserList);
  }, []);
  return (
    <section className={style.userList}>
      {Object.keys(userList)
        .filter(key => userList[key].email !== userInfo.email)
        .map(key => {
          return (
            <User data={userList[key]} key={key} openChatRoom={openChatRoom} />
          );
        })}
    </section>
  );
};

export default UserList;
