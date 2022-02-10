import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';

class FireStore {
  addUserInfo = async (data: { email: string }, uid: string) => {
    await setDoc(doc(db, 'users', uid), data);
  };

  addUserImage = async (uid: string, url: string) => {
    const washingtonRef = doc(db, 'users', uid);
    await updateDoc(washingtonRef, {
      url,
    });
  };

  getUserInfo = async (uid: string, setUserInfo: ({}) => {}) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      console.log('No such document');
    }
  };

  getAllUserInfo = async (setUserList: (data: {}[]) => {}) => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const data: {}[] = [];
    querySnapshot.forEach(doc => {
      data.push(doc.data());
    });
    setUserList(data);
  };
}

export default FireStore;