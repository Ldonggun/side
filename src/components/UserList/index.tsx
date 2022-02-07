import React from 'react';
import style from './userlist.module.css';
//component
import { User } from '../index';

const UserList = () => {
  return (
    <section className={style.userList}>
      <User />
      {/* <div>userList</div> */}
    </section>
  );
};

export default UserList;
