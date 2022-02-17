import React, { useEffect, useState } from 'react';
import style from './userlist.module.css';
//component
import { User } from '../index';
//class
import RealTimeDataBase from '../../shared/realtimedatabase';
interface UserListType {
  openChatRoom(data: { email: string; url: string; status: boolean }): void;
}
const realTimeDataBase = new RealTimeDataBase();
const UserList = ({ openChatRoom }: UserListType) => {
  const [userList, setUserList] = useState(Object);
  useEffect(() => {
    realTimeDataBase.getUserList(setUserList);
  }, []);
  return (
    <section className={style.userList}>
      {Object.keys(userList).map(key => {
        return (
          <User data={userList[key]} key={key} openChatRoom={openChatRoom} />
        );
      })}
    </section>
  );
};

export default UserList;
