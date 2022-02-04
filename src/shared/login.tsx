import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
}

export default AuthService;
