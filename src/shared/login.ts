import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import FireStore from '../shared/firestore';
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
  getUserInfo(
    setIsLogin: (value: boolean) => void,
    setUid: (uid: string) => void,
  ): void;
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
      .then((result: { user: { uid: string } }) => {
        const uid = result.user.uid;
        FireStore.addUserInfo({ email }, uid);
        result && window.alert('회원가입 완료');
        setVisible(true);
      })
      .catch((error: { message: string; code: string }) => {
        const errorCode = error.code;
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
      .then((result: {}) => {
        setIsEmailLogin(false);
        setVisible(true);
        closeModal();
      })
      .catch((error: { message: string; code: string }) => {
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
          window.alert('비밀번호가 잘 못 되었습니다.');
        }
      });
  };

  getUserInfo = (
    setIsLogin: (value: boolean) => void,
    setUid: (uid: string) => void,
  ) => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        setIsLogin(true);
        setUid(uid);
      } else {
        setIsLogin(false);
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
