import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';
//type
import { userList } from '../app';
export interface FireStoreType {
  addUserInfo(data: { email: string }, uid: string): void;
  addUserImage(uid: string, url: string): void;
  getUserInfo(
    uid: string,
    setUserInfo: React.Dispatch<
      React.SetStateAction<{
        email: string;
        url: string;
      }>
    >,
  ): void;
  getAllUserInfo(
    setUserList: React.Dispatch<
      React.SetStateAction<DocumentData | userList[]>
    >,
  ): void;
}
class FireStore implements FireStoreType {
  addUserInfo = async (data: { email: string }, uid: string) => {
    await setDoc(doc(db, 'users', uid), data);
  };

  addUserImage = async (uid: string, url: string) => {
    const washingtonRef = doc(db, 'users', uid);
    await updateDoc(washingtonRef, {
      url,
    });
  };

  getUserInfo = async (
    uid: string,
    setUserInfo: React.Dispatch<
      React.SetStateAction<{
        email: string;
        url: string;
      }>
    >,
  ) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    const email: string = docSnap.data()?.email;
    const url: string = docSnap.data()?.url;

    if (docSnap.exists()) {
      setUserInfo({ email, url });
    } else {
      console.log('No such document');
    }
  };

  getAllUserInfo = async (
    setUserList: React.Dispatch<
      React.SetStateAction<DocumentData | userList[]>
    >,
  ) => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const data: DocumentData | userList[] = [];
    querySnapshot.forEach(doc => {
      return data.push(doc.data());
    });
    setUserList(data);
  };
}

export default FireStore;
