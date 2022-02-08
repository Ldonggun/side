import {
  collection,
  doc,
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

  getAllUserInfo = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach(doc => {
      console.log(doc.data());
    });
  };
}

export default FireStore;
