import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
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
}

export default FireStore;
