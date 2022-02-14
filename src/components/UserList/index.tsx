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
  return (
    <section className={style.userList}>
      {userList?.map((data: { email: string; url: string }) => {
        return <User data={data} key={data.toString()} />;
      })}
    </section>
  );
};

export default UserList;
