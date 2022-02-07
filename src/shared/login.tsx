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

  getUserInfo = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
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
