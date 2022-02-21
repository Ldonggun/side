import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import RealTimeDataBase from '../shared/realtimedatabase';
const realTimeDataBase = new RealTimeDataBase();
export interface AuthServiceType {
  signUpEmail(
    email: string | undefined,
    password: string | undefined,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ): void;
  signInEmail(
    email: string | undefined,
    password: string | undefined,
    setIsEmailLogin: React.Dispatch<React.SetStateAction<boolean>>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    closeModal: () => void,
  ): void;
  getUserInfo(setUid: (uid: string) => void): void;
  logOut(): void;
}
class AuthService implements AuthServiceType {
  signUpEmail = (
    email: string,
    password: string,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const uid = result.user.uid;
        console.log(uid, email);
        realTimeDataBase.setUserInfo(uid, email);
        result && window.alert('회원가입 완료');
        setVisible(true);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
      });
  };

  signInEmail = (
    email: string,
    password: string,
    setIsEmailLogin: React.Dispatch<React.SetStateAction<boolean>>,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    closeModal: () => void,
  ) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const uid = result.user.uid;
        realTimeDataBase.updateUserInfo(uid, undefined, true);
        setIsEmailLogin(false);
        setVisible(true);
        closeModal();
      })
      .catch(error => {
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
          window.alert('비밀번호가 잘 못 되었습니다.');
        }
      });
  };

  getUserInfo = (setUid: (uid: string) => void) => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        setUid(uid);
      }
    });
  };

  logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(result => {})
      .catch(error => {
        console.log(error);
      });
  };
}

export default AuthService;
