import React from 'react';
import style from './userlist.module.css';
//component
import { User } from '../index';
//type
import { userList } from '../../app';
import { DocumentData } from 'firebase/firestore';
interface UserListType {
  userList: DocumentData | userList[];
}
const UserList = ({ userList }: UserListType) => {
  console.log(userList);
  return (
    <section className={style.userList}>
      {userList?.map((data: { email: string; url: string }) => {
        return <User data={data} />;
      })}
    </section>
  );
};

export default UserList;
