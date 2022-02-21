import { getDatabase, ref, set, onValue, get, child } from 'firebase/database';
export interface RealTimeDataBaseType {
  getLoginUser(
    uid: string,
    setUserInfo: React.Dispatch<React.SetStateAction<undefined>>,
  ): void;
  setUserInfo(uid: string, email?: string, url?: string): void;
  updateUserInfo(uid: string, url?: string, status?: boolean): void;
  setChat(myEmial: string, otherEmail: string, text: string): void;
  getChatLog(
    myEmail: string,
    otherEmail: string,
    setMessage: React.Dispatch<
      React.SetStateAction<
        | {
            [key: string]: string;
          }
        | undefined
      >
    >,
  ): void;
}

class RealTimeDataBase implements RealTimeDataBaseType {
  getLoginUser = (
    uid: string,
    setUserInfo: React.Dispatch<React.SetStateAction<undefined>>,
  ) => {
    const db = getDatabase();
    const usersRef = ref(db, `users/${uid}`);
    onValue(usersRef, snapshot => {
      const savedData = snapshot.val();
      if (savedData) setUserInfo(savedData);
    });
  };

  setUserInfo = (uid: string, email?: string) => {
    const db = getDatabase();
    const data = { uid, email };
    set(ref(db, 'users/' + uid), data);
  };

  updateUserInfo(uid: string, url?: string, status?: boolean) {
    const dbRef = ref(getDatabase());
    const db = getDatabase();
    const updated: { [key: string]: string | boolean | undefined } = {
      uid,
      url,
      status,
    };
    Object.keys(updated).forEach(
      key => updated[key] === undefined && delete updated[key],
    );
    get(child(dbRef, `users/${uid}`)).then(snapshot => {
      if (snapshot.exists()) {
        const savedData = snapshot.val();
        const data = Object.assign(savedData, updated);
        set(ref(db, 'users/' + uid), data);
      } else {
        console.log('No data available');
      }
    });
  }

  getUserList(setUserList: (data: { [key: string]: string }) => void) {
    const db = getDatabase();
    const userListRef = ref(db, 'users/');
    onValue(userListRef, snapshot => {
      const data = snapshot.val();
      setUserList(data);
    });
  }

  setChat = (myEmail: string, otherEmail: string, text: string) => {
    const db = getDatabase();
    const message = { sender: myEmail, text };
    const roomName = [
      myEmail.slice(0, myEmail.indexOf('@')),
      otherEmail.slice(0, otherEmail.indexOf('@')),
    ]
      .sort()
      .join('');
    const dt = new Date();
    const uid = dt.setDate(dt.getDate() + Math.floor(Math.random()));
    set(ref(db, `chatroom/${roomName}/${uid}`), message);
  };

  getChatLog = (
    myEmail: string,
    otherEmail: string,
    setMessage: React.Dispatch<
      React.SetStateAction<
        | {
            [key: string]: string;
          }
        | undefined
      >
    >,
  ) => {
    const db = getDatabase();
    const roomName = [
      myEmail.slice(0, myEmail.indexOf('@')),
      otherEmail.slice(0, otherEmail.indexOf('@')),
    ]
      .sort()
      .join('');
    const chatLogRef = ref(db, `chatroom/${roomName}`);
    onValue(chatLogRef, snapshot => {
      const data = snapshot.val();
      if (data) setMessage(data);
    });
  };
}

export default RealTimeDataBase;
