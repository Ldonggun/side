import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export interface AuthServiceType {
  signUpEmail(email: string, password: string): void;
  signInEmail(email: string, password: string): void;
  getUserInfo(
    setIsLogin: (value: boolean) => void,
    setUid: (uid: string) => void,
  ): void;
  logOut(): void;
}
class AuthService implements AuthServiceType {
  signUpEmail = (email: string, password: string) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  signInEmail = (email: string, password: string) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
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
