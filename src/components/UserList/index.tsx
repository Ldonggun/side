import React from 'react';
import style from './userlist.module.css';
//component
import { User } from '../index';

const UserList = ({ userList }: any) => {
  return (
    <section className={style.userList}>
      {userList?.map((data: { email: string; url: string }) => {
        return <User data={data} />;
      })}
    </section>
  );
};

export default UserList;
