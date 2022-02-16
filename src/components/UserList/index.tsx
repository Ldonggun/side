import React, { useEffect, useState } from 'react';
import style from './userlist.module.css';
//component
import { User } from '../index';
//class
import RealTimeDataBase from '../../shared/realtimedatabase';
interface UserListType {
  userList: undefined;
}
const realTimeDataBase = new RealTimeDataBase();
const UserList = () => {
  const [userList, setUserList] = useState(Object);
  useEffect(() => {
    realTimeDataBase.getUserList(setUserList);
  }, []);
  return (
    <section className={style.userList}>
      {Object.keys(userList).map(key => {
        return <User data={userList[key]} key={key} />;
      })}
    </section>
  );
};

export default UserList;
