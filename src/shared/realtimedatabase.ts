import { getDatabase, ref, set, onValue } from 'firebase/database';

class RealTimeDataBase {
  getLoginUser = () => {
    const db = getDatabase();
    const userStatusRef = ref(db, 'status/');
    onValue(userStatusRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        console.log(data);
      }
    });
  };

  userStatus = (uid: string, x: string) => {
    console.log(uid);
    console.log(x);
    const db = getDatabase();
    if (x === 'login') set(ref(db, 'status/' + uid), true);
    else if (x === 'logout') set(ref(db, 'status/' + uid), false);
  };
}

export default RealTimeDataBase;
