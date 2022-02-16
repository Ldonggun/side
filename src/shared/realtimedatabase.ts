import { getDatabase, ref, set, onValue, get, child } from 'firebase/database';
export interface RealTimeDataBaseType {
  getLoginUser(
    uid: string,
    setUserInfo: React.Dispatch<React.SetStateAction<undefined>>,
  ): void;
  setUserInfo(uid: string, email?: string, url?: string): void;
  updateUserInfo(uid: string, url?: string, status?: boolean): void;
}

type ObjType = {
  [key: string]: string;
};

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

  getUserList(setUserList: ({}) => void) {
    const db = getDatabase();
    const userListRef = ref(db, 'users/');
    onValue(userListRef, snapshot => {
      const data = snapshot.val();
      setUserList(data);
    });
  }
}

export default RealTimeDataBase;
