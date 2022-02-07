import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
class AuthService {
  signUpEmail = (email: string, password: string) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  signInEmail = (email: string, password: string) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  getUserInfo = (setIsLogin: (x: boolean) => {}) => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        setIsLogin(true);
        return uid;
      } else {
        setIsLogin(false);
      }
    });
  };

  logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch(error => {});
  };
}

export default AuthService;
